import { NextPage } from 'next';

import Button from '@/components/Button';
import Logo from '@/components/Logo';

const Home: NextPage = () => {
  const onLogin = () => {};

  return (
    <div className="container grid gap-8 p-8 mx-auto text-center">
      <header className="flex flex-col items-center gap-6">
        <div className="grid gap-2">
          <Logo size={256} />
          <h1 className="mt-4 text-4xl font-bold">Reactive Resume</h1>
          <p className="opacity-50">A free and open-source resume builder</p>
        </div>

        <Button onClick={onLogin}>Login</Button>
      </header>

      <p className="text-sm leading-8">
        Reactive Resume is a free and open source resume builder that’s built to
        make the mundane tasks of creating, updating and sharing your resume as
        easy as 1, 2, 3. With this app, you can create multiple resumes, share
        them with recruiters through a unique link and print as PDF, all for
        free, no advertisements, without losing the integrity and privacy of
        your data.
      </p>

      <div>
        <h2 className="text-sm font-bold uppercase">Features</h2>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase">Screenshots</h2>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase">Languages</h2>
      </div>

      <div>
        <h2 className="text-sm font-bold uppercase">Links of Interest</h2>
      </div>

      <footer className="text-sm opacity-50">
        Made with Love by
        <a
          href="https://www.amruthpillai.com/"
          className="pl-1 font-semibold hover:underline"
          rel="noreferrer"
          target="_blank">
          Amruth Pillai
        </a>
      </footer>
    </div>
  );
};

export default Home;
