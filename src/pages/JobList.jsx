import { useSelector } from "react-redux"
import Filter from "../components/Filter"

const JobList = () => {
  const { jobs, isLoading, error } = useSelector((state) => state.job);

  console.log(jobs)
  return (
    <div className="list-page">
      <Filter/>
    </div>
  )
}

export default JobList