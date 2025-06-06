'use client';

import { useState } from "react";
import SendPics from "./SendPics";
import Questionnaire from "./Questionnaire";
import TestResult from "./TestResult";
import './Main.css';

export default function Main() {
    const [step, setStep] = useState<number>(1);

    const getProgressWidth = () => {
        switch (step) {
            case 1: return '30%';
            case 2: return '60%';
            case 3: return '100%';
            default: return '0%';
        }
    };

    return (
        <div className="container">
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: getProgressWidth() }}
                />
            </div>

            {step === 1 && <SendPics step={step} setStep={setStep} />}
            {step === 2 && <Questionnaire step={step} setStep={setStep} />}
            {step === 3 && <TestResult step={step}/>}
        </div>
    );
}