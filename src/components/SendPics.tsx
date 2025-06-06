'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import { useSendPicsMutation } from "@/features/api/sendPicsApi";
import './SendPics.css';

interface UploadItem {
  id: number;
  title: string;
}

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  step: number
}

export default function SendPics({step, setStep}: Props) {
  const [sendPics, {isLoading}] = useSendPicsMutation();
  const [files, setFiles] = useState<(File | null)[]>([null, null, null]);
  const [previews, setPreviews] = useState<(string | null)[]>([null, null, null]);

  const items: UploadItem[] = [
    { id: 0, title: "Дом, дерево, человек" },
    { id: 1, title: "Несуществующее животное" },
    { id: 2, title: "Автопортрет" }
  ];

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("Файл выбран:", file.name, file);
      const newFiles = [...files];
      newFiles[index] = file;
      setFiles(newFiles);

      const reader = new FileReader();
      reader.onloadend = () => {
        const newPreviews = [...previews];
        newPreviews[index] = reader.result as string;
        setPreviews(newPreviews);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendPics = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    files.forEach((file) => {
      if (file) formData.append('files', file);
    });

    try {
      const result = await sendPics(formData).unwrap();
      if(result) localStorage.setItem('taskId', result?.task_id)
      setStep(2);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <form className="send-pics-container" onSubmit={handleSendPics}>
      <h2 className="title">Загрузите фотографии рисунков</h2>
      <p className="subtitle">Допустимые форматы: jpg, jpeg, png, pdf. Размер до 5 Мб</p>

      <div className="upload-grid">
        {items.map((item, index) => (
          <div key={item.id} className="upload-item">
            <label
              className="upload-box"
              style={previews[item.id] ? { backgroundImage: `url(${previews[item.id]})` } : {}}
            >
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={(e) => handleFileChange(e, item.id)}
                className="file-input"
              />
              <div className="overlay">
                <div className="upload-icon">
                  {files[item.id] ? (
                    <span className="icon replace-icon">&#8635;</span>
                  ) : (
                    <span className="icon upload-icon">&#8679;</span>
                  )}
                </div>
              </div>
            </label>
            <div className="upload-title">{item.title}</div>
          </div>
        ))}
      </div>

      <div className="button-wrapper" style={{justifyContent: 'space-between'}}>
        <p>шаг {step}/3</p>
        <button
          type="submit"
          disabled={files.some(file => file === null) || isLoading}
          className="next-button"
        >
          Далее
        </button>
      </div>
    </form>
  );
}

