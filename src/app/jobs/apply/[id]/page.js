"use client";

import { useParams } from 'next/navigation';
import JobApplicationForm from '@/components/JobApplicationForm';

export default function ApplyJobPage() {
  const params = useParams();
  const jobId = params.id;

  return (
    <div>
      <JobApplicationForm jobId={jobId} />
    </div>
  );
}