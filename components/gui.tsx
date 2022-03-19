export function FormElement(props: {
  children: any;
  label: string;
  required?: boolean;
  className?: string;
  hint?: string;
}) {
  return (
    <label className={"flex flex-col  " + props.className}>
      <div className="text-sm flex bg-gray-50  justify-between font-mono ">
        <div className="pl-4 py-1">{props.label}</div>

        {props.required && (
          <div className="bg-gray-100  border-b items-center border-l px-4 py-0.5 text-xs inline-flex">
            required
          </div>
        )}
      </div>

      {props.hint && (
        <div className="bg-gray-50  text-muted text-sm px-4 pb-2">
          {props.hint}
        </div>
      )}
      <div className="">{props.children}</div>
    </label>
  );
}

export function Tag(props: { children: any }) {
  return (
    <div className="text-xs text-green-600 rounded bg-green-50 py-0.5 px-1">
      {props.children}
    </div>
  );
}

export function DarkTag(props: { children: any }) {
  return (
    <div className="text-xs text-green-100 rounded bg-green-600 py-0.5 px-1">
      {props.children}
    </div>
  );
}

export function TagGroup(props: { children: any }) {
  return (
    <div className="flex sm:flex-row flex-col pt-2 gap-2 w-full md:items-center text-gray-300">
      {props.children}
    </div>
  );
}
