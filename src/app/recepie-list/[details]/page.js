import RecepieDetailsItem from "@/components/recepie-details";

async function fetchRecepieDetails(currentRecepieId) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${currentRecepieId}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

const RecepieDetailPage = async({params}) => {

  const recepieDetail = await fetchRecepieDetails(params?.details)

  return <RecepieDetailsItem getRecipeDetails={recepieDetail}/>
}
export default RecepieDetailPage