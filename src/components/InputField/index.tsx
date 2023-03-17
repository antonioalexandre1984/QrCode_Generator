import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

export function InputField() {
  const {
    github,
    linkedin,
    userName,
    isNameValid,
    isGithubValid,
    isLinkedinValid,
    handleNameChange,
    handleGithubChange,
    handleLinkedinChange,
  } = useContext(UserContext);

  return (
    <form className='flex flex-col gap-4'>
      <div className="">
        <label htmlFor="name" className="font-semibold text-md">Enter your name</label>
        <input
          type="text"
          className={`w-full border-2 py-1 px-3 text-gray-700 rounded-sm ${isNameValid ? '' : 'border-red-500'}`}
          placeholder="Please enter a valid name"
          value={userName}
          onChange={handleNameChange}
          id="name"
        />
        {!isNameValid && <p className="text-red-500 text-sm mt-1">Please enter a valid name</p>}
      </div>

      <div className="">
        <label htmlFor="github" className="font-semibold text-md">Enter your Github user</label>
        <div className="flex items-center">
          <span className="mr-2">https://github.com/</span>
          <input
            type="text"
            className={`w-full border-2 py-1 px-3 text-gray-700 rounded-sm ${isGithubValid ? '' : 'border-red-500'}`}
            placeholder="Please enter a valid Github username"
            value={github}
            onChange={handleGithubChange}
            id="github"
          />
        </div>
        {!isGithubValid && <p className="text-red-500 text-sm mt-1">Please enter a valid Github username</p>}
      </div>

      <div className="">
        <label htmlFor="linkedin" className="font-semibold text-md">Enter your Linkedin user</label>
        <div className="flex items-center">
          <span className="mr-2">https://www.linkedin.com/in/</span>
          <input
            type="text"
            className={`w-full border-2 py-1 px-3 text-gray-700 rounded-sm ${isLinkedinValid ? '' : 'border-red-500'}`}
            placeholder="Enter your Linkedin user"
            value={linkedin}
            onChange={handleLinkedinChange}
            id="linkedin"
          />
        </div>
        {!isLinkedinValid && <p className="text-red-500 text-sm mt-1">Please enter a valid Linkedin username</p>}
      </div>
    </form>
  );
}




