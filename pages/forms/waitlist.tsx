import Layout from "../../components/Layout";

export function FormElement(props: {
  children: any;
  label: string;
  required?: boolean;
  className?: string;
  hint?: string;
}) {
  return (
    <label className={"flex flex-col  " + props.className}>
      <div className="text-sm flex bg-gray-50 dark:bg-gray-800 justify-between font-mono ">
        <div className="pl-4 py-1">{props.label}</div>

        {props.required && (
          <div className="bg-gray-100 dark:bg-gray-700 border-b items-center border-l px-4 py-0.5 text-xs inline-flex">
            required
          </div>
        )}
      </div>

      {props.hint && (
        <div className="bg-gray-50 dark:bg-gray-800 text-muted text-sm px-4 pb-2">
          {props.hint}
        </div>
      )}
      <div className="">{props.children}</div>
    </label>
  );
}

export default function Waitlist() {
  return (
    <Layout>
      <form
        action="https://getform.io/f/f76f4ae7-f7e7-47f4-801a-036805ae3440"
        method="POST"
        className="flex flex-1 flex-col max-w-3xl mx-auto border-l border-r w-full"
      >
        <div className="p-4 bg-gray-50  border-b">
          <h2 className="font-bold">Join the co-op's beta</h2>

          <p className="text-gray-600">
            Join a waitlist to become an early member of the Strangemood co-op,
            and make money selling games.
          </p>
        </div>

        <p className=""></p>
        <FormElement label="Email">
          <input
            type="email"
            name="email"
            required
            className="border-b w-full px-4 py-2"
            placeholder="name@yourgame.com"
          />
        </FormElement>

        <FormElement label="Information about you and your game">
          <input
            type="text"
            name="bio"
            required
            className=" border-b w-full px-4 py-2"
            placeholder="ex: https://yourgame.com"
          />
        </FormElement>

        <div className="p-4 flex w-full justify-end items-center">
          <div className="h-px bg-black flex-1" />
          <button
            type="submit"
            className="bg-white border  border-b-2 border-black rounded px-4 py-2"
          >
            Join the co-op
          </button>
        </div>
      </form>
    </Layout>
  );
}
