import { NextPage } from 'next';

import Button from '@/components/Button';
import Logo from '@/components/Logo';

const Home: NextPage = () => {
  const onLogin = () => {};

  return (
    <div className="container grid gap-8 p-8 mx-auto text-center md:text-left md:px-0 md:py-16">
      <header className="flex flex-col items-center gap-8 md:flex-row">
        <Logo size={256} />

        <div className="flex flex-col items-center gap-2 md:items-start">
          <h1 className="text-5xl font-bold">Reactive Resume</h1>
          <p className="text-lg opacity-50">
            A free and open-source resume builder.
          </p>
          <Button className="mt-8" onClick={onLogin}>
            Login
          </Button>
        </div>
      </header>

      <p className="leading-7">
        Reactive Resume is a free and open source resume builder that’s built to
        make the mundane tasks of creating, updating and sharing your resume as
        easy as 1, 2, 3. With this app, you can create multiple resumes, share
        them with recruiters through a unique link and print as PDF, all for
        free, no advertisements, without losing the integrity and privacy of
        your data.
      </p>

      <div>
        <h2 className="mb-6 font-bold uppercase">Features</h2>
      </div>

      <div>
        <h2 className="mb-6 font-bold uppercase">Screenshots</h2>
      </div>

      <div>
        <h2 className="mb-6 font-bold uppercase">Languages</h2>
      </div>

      <div>
        <h2 className="mb-6 font-bold uppercase">Links of Interest</h2>

        <ul className="flex flex-col gap-4 text-sm font-medium md:flex-row md:gap-24">
          <li>
            <a className="hover:underline" href="#">
              Source Code on GitHub
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Donate to Reactive Resume
            </a>
          </li>
          <li>
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>

      <footer className="text-sm opacity-50">
        <p>
          Licensed under
          <a
            href="#"
            className="pl-1 font-semibold hover:underline"
            rel="noreferrer"
            target="_blank">
            MIT
          </a>
        </p>
        <p>
          Made with love by
          <a
            href="https://www.amruthpillai.com/"
            className="pl-1 font-semibold hover:underline"
            rel="noreferrer"
            target="_blank">
            Amruth Pillai
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
