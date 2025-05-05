import { client } from "@/api/client";

const UseSearchLocation = async({ searchString }) =>{
try {if(searchString.length > 2)
   {
  const response = client
    .get(
      `/search-location?search_string=${searchString}`
    )
    .then((res) => {
      return res.data;
    });
  return response;}
} catch (error) {
  let error_utterance =
    "Please enable 'Know Your Location' or enter the zip code.";
  if (error?.message == "Network Error") {
    error_utterance = `${error?.message}.Please check your internet connection and try again.`;
  }
}
}

  

export { UseSearchLocation };
