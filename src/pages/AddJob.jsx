import { v4 } from "uuid";
import AutoInput from "../components/AutoInput";
import Select from "../components/Select";
import SubmitButton from "../components/SubmitButton";
import { statusOpt, typeOpt } from "../constans/index";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { createJob, setLoading } from "../app/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddJob = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // Inputlardaki verilerden bir nesne oluşturduk.
    const newJobData = Object.fromEntries(formData.entries());
    // Tarih ve id ekle
    newJobData.id = v4();
    newJobData.date = Date.now();
   
    api.post("/jobs", newJobData)
      .then(() => {
        toast.success("İş başarıyla eklendi.");
        dispatch(createJob(newJobData));
        setTimeout(() => {
          navigate("/")
        },2000);
    
      })
      .catch(() => {
        toast.error("İş eklenirken hata oluştu!");
      });
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Yeni İş Ekle</h2>

        <form onSubmit={handleSubmit}>
          <AutoInput label="Pozisyon" name="position" />
          <AutoInput label="Şirket" name="company" />
          <AutoInput label="Lokasyon" name="location" />

          <Select label="Durum" options={statusOpt} name="status" />
          <Select label="Tür" options={typeOpt} name="type" />

          <div>
            <SubmitButton type="submit" text="Oluştur" />
          </div>
        </form>
        <ToastContainer />
      </section>
    </div>
  );
};

export default AddJob;
