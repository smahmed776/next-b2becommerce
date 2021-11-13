import useSWR from "swr";
import API from "../API";

export function useUser(text, url, auth) {
 if(auth){

     const fetcher = async () => {
       const res = await API.get(`/${url}`, {
         headers: {
           "Content-Type": "application/json",
           "Authorization": `Bearer ${auth}`
         }
       });
       return res.data;
     };
     const { data, error } = useSWR(text, fetcher);
   
     return {
       data,
       isLoading: !error && !data,
       isError: error
     };
    } else {
        const fetcher = async () => {
          const res = await API.get(`/${url}`, {
            headers: {
              "Content-Type": "application/json"
            }
          });
          return res.data;
        };
        const { data, error } = useSWR(text, fetcher);
      
        return {
          data,
          isLoading: !error && !data,
          isError: error
        };
    }
}
