// pages/index.js
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kuganraj Selvaraj - Resume</title>
        <meta name="description" content="AI Engineer | Software Developer | Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-100 p-6 font-sans">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-2">Kuganraj Selvaraj</h1>
          <p className="text-center text-gray-600">AI Engineer | Software Developer | Open to Remote/Singapore</p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Contact</h2>
            <p>📞 +6019-4450299</p>
            <p>✉️ kugan3875@gmail.com</p>
            <p>📍 Penang, Malaysia</p>
            <p>🔗 <a href="https://linkedin.com/in/kugan-raj-5069022b7" className="text-blue-500">LinkedIn Profile</a></p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Profile</h2>
            <p>
              AI-focused graduate with a Bachelor's in Intelligent Computing (USM). Delivered real-time automation tools,
              AI vision systems, and robust backend solutions at Jabil and Flex. Seeking software roles in Singapore or remote
              teams to innovate and solve high-impact problems.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <ul className="list-disc list-inside">
              <li>Languages: Python, Java, C++, C#, JS, HTML5, CSS, PHP, SQL, Flutter, R</li>
              <li>Frameworks/Tools: TensorFlow, Keras, Docker, MQTT, Azure DevOps, OpenMP</li>
              <li>Cloud: Amazon EC2, Google Cloud</li>
              <li>Soft Skills: Critical thinking, problem solving, adaptability, leadership</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Professional Experience</h2>
            <h3 className="font-semibold">Jabil Penang – Test Engineer (Oct 2024 – Present)</h3>
            <ul className="list-disc list-inside">
              <li>Built Python tool to capture MQTT data as .json and image</li>
              <li>Created C# GUI app for Raspberry Pi & robot arm control</li>
              <li>Led ML-based vision model training & deployment</li>
              <li>Mentored 4 interns, led full-stack web projects</li>
            </ul>
            <h3 className="font-semibold mt-4">Flex Penang – Intern (Mar 2023 – Sep 2023)</h3>
            <ul className="list-disc list-inside">
              <li>Developed 3 solo tools to improve production efficiency</li>
              <li>Built web dashboard for management reporting</li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Final Year Project</h2>
            <p>
              USM Bus Buddy – Developed a campus bus tracking system with real-time location and AI ETA predictions using TensorFlow.
              Integrated model into mobile app using TensorFlow Lite.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Education</h2>
            <p>BSc. Computer Science (AI Major), Universiti Sains Malaysia (2020–2024) – CGPA: 3.11</p>
            <p>Gold Award – Final Year Project</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Languages</h2>
            <p>English (Fluent), Bahasa Melayu (Fluent), Tamil (Native)</p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold">Reference</h2>
            <p>Dr. Sukumar Letchumunan – USM | 📞 +6010-3664173 | ✉️ sukumar@usm.my</p>
          </div>
        </div>
      </main>
    </>
  )
}
