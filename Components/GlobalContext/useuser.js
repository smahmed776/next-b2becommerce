import useSWR from "swr";
import API from "../API";

export function useUser(text, url, method, auth) {
  if (method === "GET") {
    if (auth) {
      const fetcher = async () => {
        const res = await API.get(url, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth}`
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
        const res = await API.get(url, {
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
  } else if (method === "POST") {
  } else if (method === "DELETE") {
    const fetcher = async () => {
      const res = await API.delete(url, {
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
  } else if (method === "PUT") {
  }
}


export function useValidate(obj){
  if (obj.method === "GET") {
    if (obj.revalidate) {
      const fetcher = async () => {
        const res = await API.get(obj.url, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        return res.data;
      };
      const { data, error } = useSWR(obj.key, fetcher, obj.revalidate);

      return {
        data,
        isLoading: !error && !data,
        isError: error
      };
    } else {
      const fetcher = async () => {
        const res = await API.get(obj.url, {
          headers: {
            "Content-Type": "application/json"
          }
        });
        return res.data;
      };
      const { data, error } = useSWR(obj.key, fetcher);

      return {
        data,
        isLoading: !error && !data,
        isError: error
      };
    }
  } else if (method === "POST") {
  } else if (method === "DELETE") {
    const fetcher = async () => {
      const res = await API.delete(url, {
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
  } else if (method === "PUT") {
  }
}