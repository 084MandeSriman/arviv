// import { useParams, Link } from "react-router-dom";

// /* BLOG DATA (can later move to separate file) */
// const blogDetails = {
//   1: {
//     title:
//       "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
//     date: "Dec 18, 2025",
//     author: "Team Fint",
//     image:
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
//   },
//   2: {
//     title:
//       "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
//     date: "Nov 11, 2025",
//     author: "Our Sr Full Stack Developer (AI) - Sai Karthik Vemuri",
//     image:
//       "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
//   },
//   3: {
//     title:
//       "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
//     date: "Oct 28, 2025",
//     author: "Team Fint",
//     image:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
//   },
// };

// export default function BlogDetail() {
//   const { id } = useParams();
//   const blog = blogDetails[id];

//   if (!blog) {
//     return (
//       <div className="py-32 text-center">
//         <h2 className="text-2xl font-bold">Blog not found</h2>
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* INTERNAL CSS */}
//       <style>{`
//         .blog-hero {
//           background: radial-gradient(circle at top left, #f1f7ff, #ffffff);
//           padding: 110px 20px 90px;
//           text-align: center;
//         }

//         .breadcrumb {
//           font-size: 14px;
//           color: #2563eb;
//           margin-bottom: 32px;
//         }

//         .breadcrumb a {
//           color: #2563eb;
//           text-decoration: none;
//         }

//         .breadcrumb span {
//           color: #64748b;
//         }

//         .blog-title {
//           font-size: 34px;
//           font-weight: 800;
//           color: #0f172a;
//           max-width: 900px;
//           margin: 0 auto;
//           line-height: 1.3;
//         }

//         .blog-meta {
//           margin-top: 16px;
//           font-size: 14px;
//           color: #475569;
//         }

//         .content-wrapper {
//           background: #f1f8ff;
//           padding: 80px 0;
//         }

//         .content-inner {
//           max-width: 1100px;
//           margin: auto;
//           padding: 0 24px;
//         }

//         .intro-grid {
//           display: grid;
//           grid-template-columns: 1.2fr 1fr;
//           gap: 50px;
//           align-items: center;
//           margin-bottom: 70px;
//         }

//         .intro-grid img {
//           border-radius: 14px;
//           width: 100%;
//         }

//         .blog-content h2 {
//           font-size: 26px;
//           font-weight: 700;
//           color: #0f172a;
//           margin-top: 60px;
//           margin-bottom: 16px;
//         }

//         .blog-content h3 {
//           font-size: 20px;
//           font-weight: 600;
//           margin-top: 36px;
//           margin-bottom: 12px;
//           color: #0f172a;
//         }

//         .blog-content p {
//           font-size: 16px;
//           line-height: 1.8;
//           color: #334155;
//           margin-bottom: 14px;
//         }

//         .blog-content ul {
//           margin: 16px 0 24px 20px;
//         }

//         .blog-content li {
//           margin-bottom: 10px;
//           color: #334155;
//         }

//         .blog-content li::marker {
//           color: #ef4444;
//         }

//         @media (max-width: 900px) {
//           .intro-grid {
//             grid-template-columns: 1fr;
//           }

//           .blog-title {
//             font-size: 28px;
//           }
//         }
//       `}</style>

//       {/* HERO */}
//       <section className="blog-hero">
//         <div className="breadcrumb">
//           <Link to="/">Home</Link> &nbsp;/&nbsp;
//           <Link to="/"> FINT - Techtalk - Blog</Link> &nbsp;/&nbsp;
//           <span>{blog.title}</span>
//         </div>

//         <h1 className="blog-title">{blog.title}</h1>

//         <div className="blog-meta">
//           📅 {blog.date} &nbsp;&nbsp;•&nbsp;&nbsp; 👤 by {blog.author}
//         </div>
//       </section>

//       {/* CONTENT */}
//       <section className="content-wrapper">
//         <div className="content-inner">
//           {/* INTRO */}
//           <div className="intro-grid">
//             <div>
//               <h2>Introduction</h2>
//               <p>
//                 The last few years have been transformative for artificial
//                 intelligence. Large Language Models (LLMs) have evolved from
//                 experimental demos into production systems used in finance,
//                 healthcare, and compliance.
//               </p>
//               <p>
//                 As organizations integrate AI into critical workflows, one
//                 truth is clear — building AI systems is no longer a proof of
//                 concept problem, it’s a production safety problem.
//               </p>
//             </div>

//             <img src={blog.image} alt={blog.title} />
//           </div>

//           {/* BODY */}
//           <div className="blog-content">
//             <h2>From POC to Production: The Trust Gap</h2>
//             <p>
//               A proof-of-concept can tolerate occasional errors. Production
//               cannot. Once AI systems interact with real users, every response
//               becomes a liability.
//             </p>

//             <h3>The Three Core Guardrail Challenges</h3>
//             <ul>
//               <li>Hallucinations – when confidence becomes liability</li>
//               <li>Sensitive data leakage and privacy risks</li>
//               <li>Prompt injection and malicious manipulation</li>
//             </ul>

//             <h2>The Tools Landscape</h2>
//             <p>
//               Several frameworks now exist to operationalize guardrails,
//               including AWS Bedrock Guardrails, NeMo Guardrails, and LangChain
//               extensions.
//             </p>

//             <h2>From Ethics to Engineering Discipline</h2>
//             <p>
//               Trustworthy AI systems don’t just generate answers — they prove
//               why those answers are correct, trace where data originated, and
//               enforce accountability.
//             </p>

//             <p>
//               Because in production AI, “it mostly works” is not good enough.
//             </p>

//             <h2>References</h2>
//             <ul>
//               <li>Reuters – AI Hallucinations in Law Firms (2025)</li>
//               <li>Anthropic AI Legal Citation Incident (2024)</li>
//             </ul>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }



import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";

/* BLOG DATA */
const blogDetails = {
  1: {
    title:
      "LLM Poisoning - Part 2: Defense Strategies – Building Resilient AI",
    date: "Dec 18, 2025",
    author: "Team Arvish Consulting",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  },
  2: {
    title:
      "Engineering AI Guardrails: Designing and Defending Trustworthy Systems",
    date: "Nov 11, 2025",
    author: "Our Sr Full Stack Developer (AI) - Sai Karthik Vemuri",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
  },
  3: {
    title:
      "LLM Poisoning - Part 1: The Hidden Threat to AI Systems",
    date: "Oct 28, 2025",
    author: "Team Arvish Consulting",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
};

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogDetails[id];

  /* ✅ SCROLL TO TOP FIX */
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  if (!blog) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-2xl font-bold">Blog not found</h2>
      </div>
    );
  }

  return (
    <>
      {/* INTERNAL CSS */}
      <style>{`
        .blog-hero {
          background: radial-gradient(circle at top left, #f1f7ff, #ffffff);
          padding: 110px 20px 90px;
          text-align: center;
        }

        .breadcrumb {
          font-size: 14px;
          color: #2563eb;
          margin-bottom: 32px;
        }

        .breadcrumb a {
          color: #2563eb;
          text-decoration: none;
        }

        .breadcrumb span {
          color: #64748b;
        }

        .blog-title {
          font-size: 34px;
          font-weight: 800;
          color: #0f172a;
          max-width: 900px;
          margin: 0 auto;
          line-height: 1.3;
        }

        .blog-meta {
          margin-top: 16px;
          font-size: 14px;
          color: #475569;
        }

        .content-wrapper {
          background: #f1f8ff;
          padding: 80px 0;
        }

        .content-inner {
          max-width: 1100px;
          margin: auto;
          padding: 0 24px;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 50px;
          align-items: center;
          margin-bottom: 70px;
        }

        .intro-grid img {
          border-radius: 16px;
          width: 100%;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .ai-visual {
          height: 320px;
          background: linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%);
          border-radius: 16px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .blog-content h2 {
          font-size: 26px;
          font-weight: 700;
          color: #0f172a;
          margin-top: 60px;
          margin-bottom: 16px;
        }

        .blog-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin-top: 36px;
          margin-bottom: 12px;
          color: #0f172a;
        }

        .blog-content p {
          font-size: 16px;
          line-height: 1.8;
          color: #334155;
          margin-bottom: 14px;
        }

        .blog-content ul {
          margin: 16px 0 24px 20px;
        }

        .blog-content li {
          margin-bottom: 10px;
          color: #334155;
        }

        .blog-content li::marker {
          color: #ef4444;
        }

        @media (max-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr;
          }

          .blog-title {
            font-size: 28px;
          }
        }
      `}</style>

      {/* HERO */}
      <section className="blog-hero">
        <div className="breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp;
          <Link to="/">Arvish Consulting - Techtalk - Blog</Link> &nbsp;/&nbsp;
          <span>{blog.title}</span>
        </div>

        <h1 className="blog-title">{blog.title}</h1>

        <div className="blog-meta">
          📅 {blog.date} &nbsp;&nbsp;•&nbsp;&nbsp; 👤 by {blog.author}
        </div>
      </section>

      {/* CONTENT */}
      <section className="content-wrapper">
        <div className="content-inner">

          {/* INTRO */}
          <div className="intro-grid">
            <div>
              <h2>Introduction</h2>
              <p>
                The last few years have been transformative for artificial
                intelligence. Large Language Models (LLMs) have evolved from
                experimental demos into production systems used in finance,
                healthcare, and compliance.
              </p>
              <p>
                As organizations integrate AI into critical workflows, one
                truth is clear — building AI systems is no longer a proof of
                concept problem, it’s a production safety problem.
              </p>
            </div>

            <img src={blog.image} alt={blog.title} />
          </div>

          {/* BODY */}
          <div className="blog-content">
            <h2>From POC to Production: The Trust Gap</h2>
            <p>
              A proof-of-concept can tolerate occasional errors. Production
              cannot. Once AI systems interact with real users, every response
              becomes a liability.
            </p>

            <h3>The Three Core Guardrail Challenges</h3>
            <ul>
              <li>Hallucinations – when confidence becomes liability</li>
              <li>Sensitive data leakage and privacy risks</li>
              <li>Prompt injection and malicious manipulation</li>
            </ul>

            <h2>The Tools Landscape</h2>
            <p>
              Several frameworks now exist to operationalize guardrails,
              including AWS Bedrock Guardrails, NeMo Guardrails, and LangChain
              extensions.
            </p>

            <h2>From Ethics to Engineering Discipline</h2>
            <p>
              Trustworthy AI systems don’t just generate answers — they prove
              why those answers are correct, trace where data originated, and
              enforce accountability.
            </p>

            <p>
              Because in production AI, “it mostly works” is not good enough.
            </p>

            <h2>References</h2>
            <ul>
              <li>Reuters – AI Hallucinations in Law Firms (2025)</li>
              <li>Anthropic AI Legal Citation Incident (2024)</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
