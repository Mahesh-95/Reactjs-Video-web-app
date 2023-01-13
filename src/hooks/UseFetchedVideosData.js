import { useQuery } from "react-query"
import { fetchVideos } from "../utils/fetchVideos"

export const useFetchVideoData = (name, url) => {
    return useQuery(name, ()=>fetchVideos(url) )
}