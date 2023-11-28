import React from 'react';


const RewardTable = ({ data }) => {
  

  return (
    (
        <table className="min-w-2/3 bg-white border border-gray-300 m-6">
            <thead className="bg-gray-200">
                <tr>
                    <th className="py-1 px-4 text-left">DATE</th>
                    <th className="py-1 px-4 text-left">REWARD TYPE</th>
                    <th className="py-1 px-4 text-left" rowSpan="2">CASHBACK<br />PERCENTAGE</th>
                    <th className="py-2 px-4 text-left">MERCHANT</th>
                    <th className="py-2 px-4 text-left">TIME</th>
                    <th className="py-2 px-4 text-left">CARD INFO</th>
                    <th className="py-2 px-4 text-left">AMOUNT SPENT</th>
                    <th className="py-2 px-4 text-left">CASHBACK REWARD</th>
                </tr>
            </thead>
            <tbody>
                {data.map((reward, index) => (
                    <tr key={reward.id} className={`${index % 2 === 0 ? 'bg-gray-100' : ''}`}>
                        <td className="py-1 px-4">{reward.date}</td>
                        <td className="flex items-center justify-start my-3 py-2 px-6"><img src={reward.img} alt={reward.rewardType} className="w-6 h-6 mr-2"/>{reward.rewardType}</td>
                        <td className="py-4 px-6">{reward.cashbackPercent * 100}%</td>
                        <td className="py-4 px-6">{reward.merchant}</td>
                        <td className="py-4 px-6">{reward.time}</td>
                        <td className="py-4 px-6">{reward.cardInfo}</td>
                        <td className="py-4 px-6">${reward.amountSpent.toFixed(2)}</td>
                        <td className="py-4 px-6 text-green-600 font-semibold">${(reward.amountSpent * reward.cashbackPercent).toFixed(2)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
   
  )
}

export default RewardTable