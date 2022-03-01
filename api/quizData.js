export async function getQuestions(
  amount = "10",
  difficulty = "easy",
  category
) {
  /* {results:[{
      category, 
      correct_answer, 
      difficulty, 
      incorrect_answers, 
      question, 
      type
    }]} */
  // &category=9 for genereal knowledge
  const response = await fetch(
    "https://opentdb.com/api.php?type=multiple&amount=" +
      amount +
      "&difficulty=" +
      difficulty +
      (category ? "&category=" + category : "")
  );
  if (response.ok) return response.json();
  throw response;
}
