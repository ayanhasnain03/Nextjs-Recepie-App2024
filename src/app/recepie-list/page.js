import RecepieList from "@/components/ui/receipe-list";
async function fetchListOfRecepies() {
  try {
    const apiResponse = await fetch('https://dummyjson.com/recipes');
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (e) {
    console.error("Failed to fetch recipes:", e);
    return [];
  }
}

const Recepies = async() => {
  const recepieList = await fetchListOfRecepies();
  
  return <div>
    <RecepieList recepieList={recepieList}/>
  </div>;
};
export default Recepies;
