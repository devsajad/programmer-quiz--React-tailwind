import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Loading from "./Loading";
import Requiz from "./Requiz";

function FinishScreen({ questions, answers, dispatch }) {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAnswerFromAi() {
      const formattedQuestions = questions.map((q, index) => ({
        question: q.question,
        options: q.options,
        answer: q.options[answers[index] - 1],
      }));
      const prompt = `
        This is a psychology test for programmers to find out which careers, languages, and courses suit their personal interests and strengths best.
        Here are the questions and answers. Please analyze and send the result of the test in Persian . send article with markdown format (use h1 for main header and h2 for sub-headers)
        ${formattedQuestions
          .map(
            (q, i) =>
              `${i + 1}. ${q.question}\nOptions: ${q.options.join(
                ", "
              )}\nAnswer: ${q.answer}`
          )
          .join("\n\n")}
      `;

      try {
        const response = await fetch(
          "https://openrouter.ai/api/v1/chat/completions",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "google/gemini-2.0-flash-001",
              messages: [
                {
                  role: "user",
                  content: prompt,
                },
              ],
            }),
          }
        );

        const data = await response.json();
        setLoading(false);
        setTestResult(data.choices[0].message.content);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    getAnswerFromAi();
  }, [questions, answers]);

  return (
    <>
      {loading && <Loading text={"درحال تحلیل آزمون ... لطفا صبر کنید"} />}
      {testResult && (
        <div className="markdown-content mb-10">
          <ReactMarkdown>{testResult}</ReactMarkdown>
          <Requiz dispatch={dispatch} />
        </div>
      )}
    </>
  );
}

export default FinishScreen;
