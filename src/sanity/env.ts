export const apiVersion = assertValue(
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-01',
  'NEXT_PUBLIC_SANITY_API_VERSION is not defined'
);


export const projectToken = assertValue(
   process.env.STUDIO_IO_PROJECT_TOKEN || 'skiRuEM7ZD6DNe7Q6uLpKag3LRs7p2gOfXG9a0Y9edxWPeFh99inujD2r5vFuqZDQJdNwuDjzJCYKzWA2XTEMFm9zuYw1qYbX99hGHYf3Ql7QkoSVTGr9216WABmHmkzqcMRKASz747gwH6aOdzOptpHIqInp05sTaVhwkx3BlQLL64xK6ZA',

  'STUDIO_IO_PROJECT_TOKEN is not defined'
);


export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  'NEXT_PUBLIC_SANITY_DATASET is not defined'
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'x3mu26pf',
  'NEXT_PUBLIC_SANITY_PROJECT_ID is not defined'
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    throw new Error(errorMessage);
  }
  return v;
}
