import SignUpForm from '../../../components/forms/signup-form';
import runClient from '../api/run-client';

export default function SignUpPage({ data }) {
  return (
    <>
      <h1>This is SignUp Page</h1>
      <SignUpForm />
    </>
  );
}

export const getServerSideProps = async () => {
  // // Fetch data from external API
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo: Repo = await res.json()
  // // Pass data to the page via props
  // return { props: { repo } }

  const data = await runClient(context, 'GET', '/api/users/currentuser');
  console.log('DATA: ', data);
  return data;
};
