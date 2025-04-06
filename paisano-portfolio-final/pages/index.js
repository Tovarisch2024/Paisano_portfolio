import React from "react";
import Head from "next/head";
import { useState } from "react";
import { UploadCloud, FileText, BookOpen } from "lucide-react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const articles = [
    {
      title: "Demystifying GDPR for SaaS Startups",
      type: "Article",
      url: "/articles/gdpr-saas",
    },
    {
      title: "Sample Legal Brief: IP Infringement in Cloud Platforms",
      type: "Legal Brief",
      url: "/briefs/ip-infringement",
    },
    {
      title: "Writing Sample: Explaining SOC 2 to Non-Tech Execs",
      type: "Sample",
      url: "/samples/soc2-overview",
    },
  ];

  const handleUpload = () => {
    if (!title || !file) {
      alert("Please enter a title and select a file.");
      return;
    }
    alert(`Uploaded: ${title}`);
    // In a real app, you would save the file using a backend or cloud service
  };

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <Head>
        <title>Paisano.xyz</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Paisano.xyz</h1>
      <p className="text-lg mb-6 text-gray-600">
        A hub for technical writing, legal insights, and persuasive content.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Upload New Work</h2>
        <div className="grid gap-4">
          <input
            type="text"
            placeholder="Title of your work"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Short description or notes (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded"
          />
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="border p-2 rounded"
          />
          <button
            onClick={handleUpload}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded w-fit"
          >
            <UploadCloud className="w-4 h-4" /> Upload
          </button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Library</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((item, index) => (
            <div key={index} className="border p-4 rounded shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                {item.type === "Article" && <BookOpen className="w-5 h-5" />}
                {item.type === "Legal Brief" && <FileText className="w-5 h-5" />}
                {item.type === "Sample" && <FileText className="w-5 h-5" />}
                <h3 className="text-lg font-medium">{item.title}</h3>
              </div>
              <a
                href={item.url}
                className="text-blue-600 hover:underline text-sm"
              >
                View Document
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
