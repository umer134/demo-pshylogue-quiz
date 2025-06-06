'use client';

import React, { useState } from 'react';
import { useSubmitSurveyMutation } from '@/features/api/surveyApi';
import './Questionnaire.css';

const OPTIONS = ['Очень редко', 'Редко', 'Иногда', 'Часто', 'Всегда'];
const FINAL_OPTIONS = ['Отличное', 'Хорошее', 'Удовлетворительное', 'Неудовлетворительное', 'Очень плохое'];

interface Props {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  step: number
}

export default function Questionnaire ({step, setStep}: Props) {
  const [submitSurvey, { isLoading, isSuccess, isError }] = useSubmitSurveyMutation();

  const [formData, setFormData] = useState({
    childName: '',
    childDOB: '',
    childGender: '',
    parentName: '',
    emotionalJoy: '',
    emotionalSad: '',
    socialFriends1: '',
    socialFriends2: '',
    socialAlone: '',
    behaviorRules: '',
    behaviorImpulse: '',
    selfConfidence: '',
    selfDoubt: '',
    emotionalState: '',
    extraInfo: '',
    strengths: '',
    weaknesses: '',
    specialists: '',
    q1_1: '',
    q1_2: '',
    q1_3: '',
    q1_4: '',
    q1_5: '',
    q1_6: '',
    q1_7: '',
    q1_8: '',
    q1_9: '',
    q1_10: '',
    q2_1: '',
    q2_2: '',
    q2_3: '',
    q2_4: '',
    q2_5: '',
    q2_6: '',
    q2_7: '',
    q2_8: '',
    q2_9: '',
    q2_10: '',
    q3_1: '',
    q3_2: '',
    q3_3: '',
    q3_4: '',
    q3_5: '',
    q3_6: '',
    q3_7: '',
    q3_8: '',
    q3_9: '',
    q3_10: '',
    q4_1: '',
    q4_2: '',
    q4_3: '',
    q4_4: '',
    q4_5: '',
    q4_6: '',
    q4_7: '',
    q4_8: '',
    q4_9: '',
    q4_10: ''

  });

  const isFormValid = Object.entries(formData)
  .filter(([key]) => !/^q[1-4]_\d+$/.test(key)) // исключаем q1_1–q4_10
  .every(([, val]) => val.trim() !== '');

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
  try {
    await submitSurvey(formData).unwrap();
    setStep(3);
    // Перейти к этапу получения отчета или показать сообщение
    console.log('Анкета успешно отправлена');
  } catch (err) {
    console.error('Ошибка при отправке анкеты:', err);
  }
};

  return (
    <div className="questionnaire">
      <h2>Общая информация о ребенке</h2>
      <label>
        Имя ребенка
        <input type="text" value={formData.childName} onChange={(e) => handleChange('childName', e.target.value)} />
      </label>
      <label style={{display: 'flex', flexDirection: 'column'}}>
        Дата рождения
        <input type="date" style={{width:150}} value={formData.childDOB} onChange={(e) => handleChange('childDOB', e.target.value)} />
      </label>
      <div className="radio-group" id='pik-gender'>
        <span>Пол ребенка:</span>
        <div id='gender-labels'>
          <label><input type="radio" name="gender" value="M" onChange={(e) => handleChange('childGender', e.target.value)} />Мужской</label>
          <label><input type="radio" name="gender" value="F" onChange={(e) => handleChange('childGender', e.target.value)} />Женский</label>
        </div>
      </div>
      <label>
        Имя родителя, заполняющего анкету
        <input type="text" value={formData.parentName} onChange={(e) => handleChange('parentName', e.target.value)} />
      </label>

      <h3>Раздел 1. Эмоциональная сфера</h3>
      {renderRadioRow('Ребенок часто выражает радость и удовольствие', 'emotionalJoy')}
      {renderRadioRow('Ребенок часто грустит или плачет без причины', 'emotionalSad')}

      <h3>Раздел 2. Социальное взаимодействие</h3>
      {renderRadioRow('Ребенок легко заводит друзей (1)', 'socialFriends1')}
      {renderRadioRow('Ребенок легко заводит друзей (2)', 'socialFriends2')}
      {renderRadioRow('Ребенок предпочитает играть один', 'socialAlone')}

      <h3>Раздел 3. Саморегуляция и поведение</h3>
      {renderRadioRow('Ребенок умеет следовать правилам и инструкциям', 'behaviorRules')}
      {renderRadioRow('Ребенку трудно контролировать импульсы', 'behaviorImpulse')}

      <h3>Раздел 4. Самооценка и уверенность</h3>
      {renderRadioRow('Ребенок уверен в своих способностях', 'selfConfidence')}
      {renderRadioRow('Ребенок часто сомневается в себе', 'selfDoubt')}

      <h3>Раздел 5. Общие вопросы</h3>
      <div className="radio-group wide">
        <p>Как вы оцениваете общее эмоц. состояние ребенка?</p>
        {FINAL_OPTIONS.map((option) => (
          <label key={option}>
            <input type="radio" name="emotionalState" value={option} onChange={(e) => handleChange('emotionalState', e.target.value)} />
            {option}
          </label>
        ))}
      </div>

      <label>
        Есть ли особенности развития/поведения?
        <textarea value={formData.extraInfo} onChange={(e) => handleChange('extraInfo', e.target.value)} />
      </label>

      <label>
        Сильные стороны и таланты ребенка
        <textarea value={formData.strengths} onChange={(e) => handleChange('strengths', e.target.value)} />
      </label>

      <label>
        Области, требующие особого внимания
        <textarea value={formData.weaknesses} onChange={(e) => handleChange('weaknesses', e.target.value)} />
      </label>

      <label>
        Обращались ли к специалистам
        <textarea value={formData.specialists} onChange={(e) => handleChange('specialists', e.target.value)} />
      </label>

      <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
        <p>шаг {step}/3</p>
         <div className="buttons">
        <button onClick={() => setStep(1)} className="secondary" disabled={isLoading}>&lt; К загрузке рисунков</button>
        <button onClick={handleSubmit} className="primary" disabled={!isFormValid || isLoading}>Узнать результаты &gt;&gt;</button>
      </div>
      </div>
    </div>
  );

  function renderRadioRow(question: string, name: keyof typeof formData) {
    return (
      <div className="radio-row">
        <p>{question}</p>
        <div className="radio-options">
          {OPTIONS.map((opt) => (
            <label key={opt}>
              <input
                type="radio"
                name={name}
                value={opt}
                checked={formData[name] === opt}
                onChange={(e) => handleChange(name, e.target.value)}
              />
              {opt}
            </label>
          ))}
        </div>
      </div>
    );
  }
};
