export function formatResultsToQuiz(results) {
  const formattedResult = results.map((result,index) => ({
    name: `question${index+1}`,
    type: "list",
    message: `${result.question}`,
    choices: Object.values(result.answers).filter(a=>a!=null),
  }));
  const ansTest=results.map(result=>Object.values(result.correct_answers).findIndex(item=>JSON.parse(item) ===true))
  const allAnswers=results.map((result,index)=>Object.values(result.answers)[ansTest[index]])
  return {questions:formattedResult,answers:allAnswers};
}
