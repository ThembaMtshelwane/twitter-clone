const CreateAccountForm = () => {
  return (
    <section className="sm:w-[80%] mx-auto">
      <h1 className="text-4xl mb-5 font-semibold">Create your account</h1>
      <form action="" className="flex flex-col space-y-8 ">
        <input type="text" name="username" required placeholder="Username" />
        <input
          type="email"
          name="password"
          required
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
        />
        <input type="date" name="dob" required />

        <button className="bg-accent text-primary">Sign Up</button>
      </form>
    </section>
  );
};

export default CreateAccountForm;
