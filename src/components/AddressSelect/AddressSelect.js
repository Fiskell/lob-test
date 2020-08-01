import React, { useState, useCallback } from "react";
import AsyncSelect from "react-select/async";
import lobApi from "api/lobApi";
import _ from "lodash";

const AddressSelect = ({ onChange }) => {
  const [address, setAddress] = useState(null);

  const styles = {
    control: (base, state) => ({
      ...base,
      minHeight: "50px",
      display: "flex",
      alignItems: "center",
    }),
    singleValue: (base, state) => ({
      ...base,
      minHeight: "50px",
      width: "100%",
      display: "flex",
      alignItems: "center",
    }),
    valueContainer: (base, state) => ({
      ...base,
      display: "flex",
    }),
    menu: (base, state) => ({
      ...base,
      zIndex: 50,
    }),
    group: (base, state) => ({
      ...base,
      borderBottom: "1px solid #e5e5e5",
    }),
  };

  const loadOptions = (searchValue, callback) => {
    const api = new lobApi();
    api.searchAddresses(searchValue).then(
      (resp) => {
        let newOptions = [];
        resp.data.data.map((option) => {
          newOptions.push({
            value: option,
            label: option.id,
          });
        });
        callback(newOptions);
      },
      (err) => {
        console.log("err: ", err);
      }
    );
  };

  // We don't want to search on every key press, only when they stop typing
  const debounceLoadOptions = useCallback(_.debounce(loadOptions, 500), [
    address,
  ]);

  // Callback for form
  const handleChange = (newAddress) => {
    const newVal = newAddress ? newAddress.value : null;
    setAddress(newVal);
    onChange && onChange(newVal);
  };

  return (
    <AsyncSelect
      components={{ Option, SingleValue }}
      styles={styles}
      placeholder="Search for address..."
      isClearable
      cacheOptions
      loadOptions={debounceLoadOptions}
      onChange={handleChange}
    />
  );
};

const SingleValue = (props) => {
  return <Option {...props} />;
};

const Option = (props) => {
  const { data, innerProps } = props;
  const addr = data.value;

  return (
    <div
      {...innerProps}
      className="cursor-pointer flex flex-grow items-center border-b py-2 px-4 hover:bg-blue-200"
    >
      <div className="flex-grow flex flex-col">
        <div className="text-md mb-1">{addr.name}</div>
        <div className="flex flex-col text-sm text-blue-900">
          <div>{addr.address_line1}</div>
          {addr.address_line2 && <div>{addr.address_line2}</div>}
          <div>{`${addr.address_city}, ${addr.address_state} ${addr.address_zip}`}</div>
          <div>{addr.address_country}</div>
        </div>
      </div>
      <div>{addr.id}</div>
    </div>
  );
};

export default AddressSelect;
