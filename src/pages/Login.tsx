import { signInWithGithub } from "../api/auth";

export const LoginPage = () => {
  const githubLogin = async () => {
    try {
      await signInWithGithub();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <button
        className="cursor-pointer rounded-lg bg-gray-800 px-3 py-1 text-white hover:bg-gray-500"
        onClick={githubLogin}
      >
        Signin with Github
      </button>
    </div>
  );
};
