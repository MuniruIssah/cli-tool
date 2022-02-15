import fetch from "node-fetch";
export default async function getQuiz({
  difficulty = "easy",
  limit = 10,
  tags = "Javascript",
}) {
  const response = await fetch(
    `https://quizapi.io/api/v1/questions?apiKey=JqsS8lLB9Uu9z4KTWTPlcLInb0xj4tlzxJNcgUQa&limit=${limit}&category=Code&tags=${tags}&difficulty=${difficulty}`
  );

  const results = await response.json();
  return results;
}
