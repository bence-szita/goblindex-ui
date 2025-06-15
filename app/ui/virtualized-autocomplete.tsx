import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { VariableSizeList, ListChildComponentProps } from "react-window";

// Types
interface VirtualizedAutocompleteProps<T> {
  value: T | null;
  onChange: (event: React.SyntheticEvent, value: T | null) => void;
  options: T[];
  label?: string;
  placeholder?: string;
  disablePortal?: boolean;
}

// Listbox component for virtualization
const LISTBOX_PADDING = 8; // px

const OuterElementContext = React.createContext({});

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext);
  return <div ref={ref} {...props} {...outerProps} />;
});

function renderRow(props: ListChildComponentProps) {
  const { data, index, style } = props;
  const option = data[index];
  const inlineStyle = {
    ...style,
    top: (style.top as number) + LISTBOX_PADDING,
  };
  return (
    <div style={inlineStyle} {...option?.props}>
      {option?.key}
    </div>
  );
}

// Custom Listbox component using react-window for virtualization
const ListboxComponent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLElement>>(function ListboxComponent(
  props,
  ref
) {
  const { children, ...other } = props;
  const itemData: React.ReactNode[] = [];

  (children as React.ReactElement<unknown>[]).forEach((item: any) => {
    itemData.push(item);
  });

  const itemCount = itemData.length;
  const itemSize = 36;

  const getHeight = () => {
    return itemCount > 8 ? 8 * itemSize : itemData.length * itemSize;
  };

  return (
    <div ref={ref}>
      <OuterElementContext.Provider value={other}>
        <VariableSizeList
          height={getHeight() + 2 * LISTBOX_PADDING}
          width="100%"
          key={itemCount}
          itemSize={() => itemSize}
          itemCount={itemCount}
          outerElementType={OuterElementType}
          overscanCount={5}
          itemData={itemData}
        >
          {renderRow}
        </VariableSizeList>
      </OuterElementContext.Provider>
    </div>
  );
});

// The reusable virtualized autocomplete component
export function VirtualizedAutocomplete<T>(props: VirtualizedAutocompleteProps<T>) {
  const { value, onChange, label = "Select option", options, placeholder = "", disablePortal = false } = props;

  return (
    <div className="w-full max-w-xs mx-auto">
      <Autocomplete
        disablePortal={disablePortal}
        value={value}
        onChange={onChange}
        options={options}
        getOptionLabel={(option: any) => {
          return option?.text || "No item selected";
        }}
        isOptionEqualToValue={(option: any, value: any) => option?.value === value?.value}
        slotProps={{ listbox: { component: ListboxComponent } }}
        renderInput={(params) => <TextField {...params} label={label} placeholder={placeholder} />}
      />
    </div>
  );
}
