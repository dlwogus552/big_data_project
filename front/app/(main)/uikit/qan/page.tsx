'use client';
import React, { useState } from 'react';

function qanDemo() {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleQuestion = (index) => {
        if (selectedQuestion === index) {
            setSelectedQuestion(null);
        } else {
            setSelectedQuestion(index);
        }
    };

    const faqs = [
        {
            question: '고등어란 무엇인가요?',
            answer: '고등어는 대체로 25cm에서 60cm까지 자랄 수 있는 작은 해양 생물로, 특히 태평양과 대서양의 따뜻한 해역에서 발견됩니다. 이는 민물과 염분 농도가 높은 바닷물에서 모두 발견될 수 있습니다. 고등어는 음식 사슬의 상당한 부분을 차지하며, 작은 먹이물부터 작은 어류까지 다양한 것을 먹습니다. 고등어는 주로 녹색이나 청색을 띠며, 몸의 양쪽에 검은 줄무늬가 있을 수 있습니다. 이러한 생태학적 특징으로 인해 고등어는 어류학자들 사이에서 인기가 있습니다. 또한 고등어는 맛과 영양 면에서도 인정받으며, 다양한 요리에서 사용됩니다.'
        },
        {
            question: '고등어의 금어기는 언제인가요?',
            answer: '고등어의 금어기는 일반적으로 가을에서 겨울로 이어지는 시기인 10월부터 1월 사이에 발생합니다. 이 기간 동안 고등어는 번식 준비를 위해 해역을 떠나거나 번식을 하기 위해 이동하기 때문에 어획량이 감소합니다. 따라서 고등어의 어획이 어려워지는 경향이 있습니다. 그러나 2월 이후에는 어획량이 점차 회복되어 봄부터 여름까지 고등어를 더 쉽게 어획할 수 있게 됩니다.'
        },
        {
            question: '고등어의 서식지는 어디인가요?',
            answer: '고등어는 주로 태평양과 대서양의 따뜻한 해역에서 발견됩니다. 이러한 해역에서 고등어는 다양한 서식지를 가지고 있습니다. 해안이나 해양의 부유물 주변, 또는 수심이 깊은 바닷물에서 발견될 수 있습니다. 또한 고등어는 민물과 염분 농도가 높은 바닷물 모두에서 발견될 수 있습니다. 이러한 다양한 서식지로 인해 고등어는 널리 분포되어 있으며, 어류학자들 사이에서 연구 대상으로 인기가 있습니다.'
        },
        {
            question: '고등어는 어떤 종류의 먹이를 선호하나요?',
            answer: '고등어는 주로 작은 먹이물부터 작은 어류까지 다양한 종류의 먹이를 선호합니다. 주로 고등어가 먹는 먹이는 작은 어류, 오징어, 조개류, 미소동물 등입니다. 그러나 고등어는 환경적인 변화나 먹이의 가용성에 따라 먹이의 종류를 조절할 수도 있습니다. 특히 고등어가 오징어나 작은 어류를 선호하는 경우가 많습니다. 이러한 먹이 선호는 고등어의 자연스러운 행동 중 하나로, 고등어가 자신의 영역에서 쉽게 찾을 수 있는 먹이를 선호하는 경향이 있습니다. 고등어가 다양한 종류의 먹이를 먹는 것은 그들이 다양한 서식지에서 번성하고 살아갈 수 있는데 도움이 됩니다. 이는 생태적으로 다양한 영역에서 존재할 수 있는 고등어의 중요한 특징 중 하나입니다.'
        },
        {
            question: '고등어의 건강에 미치는 영향과 영양가는 어떤가요?',
            answer: '1. 오메가-3 지방산: 고등어는 오메가-3 지방산인 EPA (에이코사펜타엔산)와 DHA (도코사헥사엔산)를 풍부하게 함유하고 있습니다. 이러한 지방산들은 심혈관 건강을 촉진하고 염증을 줄이며 뇌 기능을 향상시키는 데 도움을 줍니다.',
            answer1: '2. 고단백, 저지방: 고등어는 고단백질이며 저지방의 특징을 가지고 있습니다. 고단백질은 근육을 형성하고 유지하는 데 도움을 주며, 저지방은 심혈관 질환의 위험을 줄이는 데 도움이 됩니다.',
            answer2: '3. 비타민과 미네랄: 고등어는 비타민 D, 비타민 B12, 세레오티닌, 나이아신, 리보플라빈, 비타민 B6, 비타민 A, 비타민 E, 칼슘, 철, 마그네슘, 인 등 다양한 비타민과 미네랄을 함유하고 있습니다.',
            answer3: '4. 항산화제: 고등어에는 항산화제인 세레오티닌이 풍부하게 함유되어 있습니다. 항산화제는 세포 손상을 줄이고 건강한 세포를 유지하는 데 도움을 줍니다.'
        },
        {
            question: '고등어가 다른 생물들과 상호 작용하는 방식은 무엇인가요?',
            answer: '1. 포식자-피식자 관계: 고등어는 주로 작은 먹이 동물들을 먹음으로써 생태계의 상위 포식자로 작용합니다. 이러한 먹이 사슬에서 고등어는 다양한 먹이 동물들의 개체 수를 조절하고 생태적인 균형을 유지합니다.',
            answer1: '2. 생태적 역할 조절: 고등어는 생태계에서 중요한 생태 조절자 역할을 합니다. 그들의 먹이 사슬 내에서의 위치와 영향력은 생태계의 구조와 기능을 조절하고 안정성을 유지하는 데 중요합니다.',
            answer2: '3. 번식 지원: 고등어는 번식 과정에서 다른 생물들과의 상호 작용을 통해 번식을 지원합니다. 알을 부착하고 보호하는 과정에서 다른 생물들과의 상호 작용이 필요합니다.',
            answer3: '4. 고등어가 생활하는 환경에서 다른 생물들과의 경쟁 및 협력도 있습니다. 이러한 상호 작용들은 해양 생태계의 복잡한 네트워크를 형성하고 유지하는 데 중요한 역할을 합니다.'
        },
        // 추가 FAQ 항목들을 여기에 추가할 수 있습니다.
    ];

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <button
                        style={{
                            backgroundColor: selectedQuestion === index ? '#333' : '#f0f0f0',
                            color: selectedQuestion === index ? '#fff' : '#333',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease',
                            width: '100%',
                            textAlign: 'left',
                            fontSize: '16px',
                        }}
                        onClick={() => toggleQuestion(index)}
                    >
                        {faq.question}
                    </button>
                    {selectedQuestion === index && (
                        <div>
                            <p
                                style={{
                                    backgroundColor: '#f9f9f9',
                                    padding: '15px',
                                    borderRadius: '5px',
                                    marginTop: '10px',
                                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                {faq.answer}
                            </p>
                            {faq.answer1 && (
                                <p
                                    style={{
                                        backgroundColor: '#f9f9f9',
                                        padding: '15px',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    {faq.answer1}
                                </p>
                            )}
                            {faq.answer2 && (
                                <p
                                    style={{
                                        backgroundColor: '#f9f9f9',
                                        padding: '15px',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    {faq.answer2}
                                </p>
                            )}
                            {faq.answer3 && (
                                <p
                                    style={{
                                        backgroundColor: '#f9f9f9',
                                        padding: '15px',
                                        borderRadius: '5px',
                                        marginTop: '10px',
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                                    }}
                                >
                                    {faq.answer3}
                                </p>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );    
}

export default qanDemo;
