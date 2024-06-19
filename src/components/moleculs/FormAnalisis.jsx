import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import Searchable from "react-searchable-dropdown";
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
import plantsData from "../../data/plantsData.json";
import { AnalisisAct } from "../../redux/featch/Analisis";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const jenistanaman = [
  {
    value: "padi",
    label: "padi",
  },
  {
    value: "jagung",
    label: "jagung",
  },
  {
    value: "palawija",
    label: "palawija",
  },
  {
    value: "cabai",
    label: "cabai",
  },
  {
    value: "bawang merah",
    label: "bawang merah",
  },
  {
    value: "bawang putih",
    label: "bawang putih",
  },
  {
    value: "Umbi-Umbian",
    label: "Umbi-Umbian",
  },
  {
    value: "kacang-kacangan",
    label: "kacang-kacangan",
  },
  {
    value: "tanaman rimpang",
    label: "tanaman rimpang",
  },
];

const phTanah = [
  {
    value: 4,
    label: 4,
  },
  {
    value: 5,
    label: 5,
  },
  {
    value: 6,
    label: 6,
  },
  {
    value: 7,
    label: 7,
  },
  {
    value: 8,
    label: 8,
  },
  {
    value: 9,
    label: 9,
  },
];

const tekstur = [
  {
    value: "pasir",
    label: "pasir",
  },
  {
    value: "pasir berlempung",
    label: "pasir berlempung",
  },
  {
    value: "lempung berpasir",
    label: "lempung berpasir",
  },
  {
    value: "lempung",
    label: "lempung",
  },
  {
    value: "lempung berdebu",
    label: "lempung berdebu",
  },
  {
    value: "debu",
    label: "debu",
  },
  {
    value: "lempung berliat",
    label: "lempung berliat",
  },
  {
    value: "lempung liat berpasir",
    label: "lempung liat berpasir",
  },
  {
    value: "lempung berliat berdebu",
    label: "lempung berliat berdebu",
  },
  {
    value: "liat berpasir",
    label: "liat berpasir",
  },
  {
    value: "liat berdebu",
    label: "liat berdebu",
  },
  {
    value: "liat",
    label: "liat",
  },
];

const struktur = [
  {
    value: "struktur butir",
    label: "struktur butir",
  },
  {
    value: "struktur blok",
    label: "struktur blok",
  },
  {
    value: "struktur prisma",
    label: "struktur prisma",
  },
  {
    value: "struktur columnar",
    label: "struktur columnar",
  },
  {
    value: "struktur lempengan",
    label: "struktur lempengan",
  },
  {
    value: "struktur serbuk",
    label: "struktur serbuk",
  },
  {
    value: "struktur crumb",
    label: "struktur crumb",
  },
];

const warna = [
  {
    value: "cokelat",
    label: "cokelat",
  },
  {
    value: "hitam",
    label: "hitam",
  },
  {
    value: "cokelat kehitaman",
    label: "cokelat kehitaman",
  },
  {
    value: "cokelat gelap kuning kemerahan",
    label: "cokelat gelap kuning kemerahan",
  },
  {
    value: "hitam kekuningan",
    label: "hitam kekuningan",
  },
];

const kondisi = [
  {
    value: "halus",
    label: "halus",
  },
  {
    value: "agak halus",
    label: "agak halus",
  },
  {
    value: "sedang",
    label: "sedang",
  },
  {
    value: "agak kasar",
    label: "agak kasar",
  },
  {
    value: "kasar",
    label: "kasar",
  },
];
const FormAnalisis = (props) => {
  const { onClick } = props;
  const [jenisTanaman, setJenisTanaman] = useState("");
  const [PhTanah, setPhTanah] = useState("");
  const [teksturTanah, setTeksturTanah] = useState("");
  const [strukturTanah, setStrukturTanah] = useState("");
  const [warnaTanah, setWarnaTanah] = useState("");
  const [kondisiTanah, setKondisiTanah] = useState("");
  const navigate = useNavigate();
  // console.log(jenisTanaman);
  const [analysisResult, setAnalysisResult] = useState([]);
  const [result, setResult] = useState("");

  const dispatch = useDispatch();
  const { data, cuaca } = useSelector((state) => state.analisis);
  console.log("cuaca hari ini aaaaaaaaaaa", cuaca);
  const analyzeSoil = () => {
    // const result = plantsData.filter((plant) => {
    //   const isPhMatch =
    //     PhTanah >= plant.ph_tanah.min && PhTanah <= plant.ph_tanah.max;
    //   const isTeksturMatch =
    //     teksturTanah.toLowerCase() === plant.tekstur.toLowerCase();
    //   const isStrukturMatch =
    //     strukturTanah.toLowerCase() === plant.struktur.toLowerCase();
    //   const isWarnaMatch =
    //     warnaTanah.toLowerCase() === plant.warna.toLowerCase();
    //   const isKondisiFisikMatch =
    //     kondisiTanah.toLowerCase() === plant.kondisi_fisik.toLowerCase();
    //   return (
    //     isPhMatch &&
    //     isTeksturMatch &&
    //     isStrukturMatch &&
    //     isWarnaMatch &&
    //     isKondisiFisikMatch
    //   );
    // });
    // setAnalysisResult(result);
    if (
      !PhTanah ||
      !PhTanah ||
      !teksturTanah ||
      !strukturTanah ||
      !warnaTanah ||
      !kondisiTanah
    ) {
      toast.error("data tidak boleh kosong!", {
        position: "bottom-right",
      });
      return;
    }
    switch (jenisTanaman) {
      case "padi":
        PhTanah >= 4 &&
        PhTanah <= 7 &&
        teksturTanah == "liat berpasir" &&
        strukturTanah == "struktur serbuk" &&
        warnaTanah == "cokelat kehitaman" &&
        kondisiTanah == "agak halus"
          ? setResult("Cocok")
          : setResult("Tidak Cocok");

        break;
      case "jagung":
        PhTanah >= 4 &&
        PhTanah <= 7 &&
        teksturTanah == "liat berpasir" &&
        strukturTanah == "struktur serbuk" &&
        warnaTanah == "cokelat kehitaman" &&
        kondisiTanah == "agak halus"
          ? setResult("Cocok")
          : setResult("Tidak Cocok");
        break;
      default:
        break;
    }

    result && redirect();
  };

  const redirect = () => {
    navigate("/hasil-analisis");
  };

  useEffect(() => {
    // dispatch(AnalisisAct(result));
    dispatch(AnalisisAct({ result, PhTanah, teksturTanah }));
  }, [result, PhTanah]);

  console.log("Hasilnya adalah", result);
  console.log("Datanya adalah", data);
  console.log(
    "ini isinya apa",
    jenisTanaman,
    PhTanah,
    teksturTanah,
    strukturTanah,
    warnaTanah,
    kondisiTanah
  );
  console.log(plantsData);
  console.log(analysisResult);
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 h-100% bg-[#1414149c] flex justify-center items-center z-50 ">
      <div className="px-10 py-8 rounded-3xl bg-white relative max-w-[600px] w-full flex flex-col gap-3 ">
        <button
          className="absolute top-3 right-3 p-2 bg-[#dfdfdf] hover:bg-[#cecece]  rounded-full"
          onClick={onClick}
        >
          <CgClose />
        </button>

        <h1 className="text-2xl font-bold">Form Pengecekan Tanah</h1>
        <div className="flex flex-col gap-1 ">
          <span>Nama Tanaman</span>
          <Searchable
            placeholder="Pilih Tanaman"
            value={["popular"]}
            hideSelected
            options={jenistanaman}
            onSelect={(value) => {
              setJenisTanaman(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>PH Tanah</span>
          <Searchable
            placeholder="Masukkan PH Tanah"
            value={["popular"]}
            hideSelected
            options={phTanah}
            onSelect={(value) => {
              setPhTanah(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Tekstur</span>
          <Searchable
            placeholder="Masukkan Tekstur"
            value={["popular"]}
            hideSelected
            options={tekstur}
            onSelect={(value) => {
              setTeksturTanah(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Struktur</span>
          <Searchable
            placeholder="Masukkan Struktur"
            value={["popular"]}
            hideSelected
            options={struktur}
            onSelect={(value) => {
              setStrukturTanah(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Warna</span>
          <Searchable
            placeholder="Masukkan Warna"
            value={["popular"]}
            hideSelected
            options={warna}
            onSelect={(value) => {
              setWarnaTanah(value);
              console.log(value);
            }}
          />
        </div>

        <div className="flex flex-col gap-1 ">
          <span>Kondisi Fisik</span>
          <Searchable
            placeholder="Masukkan Kondisi Fisik"
            value={["popular"]}
            hideSelected
            options={kondisi}
            onSelect={(value) => {
              setKondisiTanah(value);
              console.log(value);
            }}
          />
        </div>
        <Button
          // onClick={() => navigate("/hasil-analisis") analyzeSoil}
          onClick={analyzeSoil}
          type="LongPrimaryButtonIconRow"
          text="Lihat Hasil"
          className="mt-3"
        />
      </div>
    </div>
  );
};

export default FormAnalisis;
