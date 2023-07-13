import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className=" mt-32 mb-4 flex justify-center ">
      <SignIn />
    </div>
  );
}
