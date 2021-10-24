import { FC } from "react";

const TextInput: FC = () => {
  return (
    <div>
      <label
        htmlFor="email-address"
        className="block text-sm font-medium text-primary-900"
      >
        Email address
      </label>

      <input
        type="text"
        name="email-address"
        id="email-address"
        autoComplete="email"
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
};

export default TextInput;
