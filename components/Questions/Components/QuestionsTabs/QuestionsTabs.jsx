'use client'

import React, { useState } from 'react';
import QuestionsItem from '../QuestionsItem/QuestionsItem';
import { LayoutGroup } from 'framer-motion';


export default function QuestionsTabs({ list }) {

   const [activeTab, setActiveTab] = useState(null);

   return (
      <LayoutGroup>
         {list.map((item) =>
            <QuestionsItem
               data={item}
               key={item.id}
               setActiveTab={setActiveTab}
               activeTab={activeTab}
            />)}
      </LayoutGroup>
   );
};