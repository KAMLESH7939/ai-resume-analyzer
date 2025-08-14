
import type { Route } from "./+types/home";
import {resumes} from "../../constants";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import { useLocation, useNavigate } from 'react-router';
import {useEffect} from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
    const {auth} = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if(!auth.isAuthenticated) navigate('/auth?next=/');
    }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

    <section className="main-section">

      <div className="page-heading py-16">
        <h1>Track Your Applications & Resume Ratings</h1>
        <h2>Review your submissions and check AI-powered feedback.</h2>
        {/*{!loadingResumes && resumes?.length === 0 ? (*/}
        {/*  <h2>No resumes found. Upload your first resume to get feedback.</h2>*/}
        {/*): (*/}
        {/*  <h2>Review your submissions and check AI-powered feedback.</h2>*/}
        {/*)}*/}
      </div>
      {/*{loadingResumes && (*/}
      {/*  <div className="flex flex-col items-center justify-center">*/}
      {/*    <img src="/images/resume-scan-2.gif" className="w-[200px]" />*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{!loadingResumes && resumes.length > 0 && (*/}
      {/*  <div className="resumes-section">*/}
      {/*    {resumes.map((resume) => (*/}
      {/*      <ResumeCard key={resume.id} resume={resume} />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*)}*/}

      {/*{!loadingResumes && resumes?.length === 0 && (*/}
      {/*  <div className="flex flex-col items-center justify-center mt-10 gap-4">*/}
      {/*    <Link to="/upload" className="primary-button w-fit text-xl font-semibold">*/}
      {/*      Upload Resume*/}
      {/*    </Link>*/}
      {/*  </div>*/}
      {/*)}*/}


      {resumes.length > 0 && (
          <div className="resumes-section">
              {resumes.map((resume) => (
                  <ResumeCard key={resume.id} resume={resume} />
              ))}
          </div>
      )}
    </section>
  </main>
}
