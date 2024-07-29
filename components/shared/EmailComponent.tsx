"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Mail,
  MessageCircleWarning,
  Pen,
  Plus,
  Search,
  Send,
  Star,
  Trash2,
  TriangleAlert
} from 'lucide-react';
import MessagePreview from './MessagePreview';
import MessageHeader from './MessageHeader';
import { ScrollArea } from '../ui/scroll-area';
import MessageComponent from './MessageComponent';
import Compose from './Compose';

const tabs = [
  { name: "inbox", icon: Mail, num: 4500 },
  { name: "starred", icon: Star, num: 30 },
  { name: "sent", icon: Send, num: 560 },
  { name: "draft", icon: Pen, num: 9 },
  { name: "spam", icon: TriangleAlert, num: 377 },
  { name: "important", icon: MessageCircleWarning, num: 689 },
  { name: "bin", icon: Trash2, num: 142 },
]

const messages = [
  { type: "inbox", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 1.", time: "8. 38 pm" },
  { type: "inbox", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 2.", time: "8. 38 pm" },
  { type: "inbox", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 3.", time: "8. 38 pm" },
  { type: "inbox", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 4.", time: "8. 38 pm" },
  { type: "starred", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 5.", time: "8. 38 pm" },
  { type: "sent", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 6.", time: "8. 38 pm" },
  { type: "draft", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 7.", time: "8. 38 pm" },
  { type: "spam", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 8.", time: "8. 38 pm" },
  { type: "important", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 9.", time: "8. 38 pm" },
  { type: "bin", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 10.", time: "8. 38 pm" },
  { type: "starred", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 11.", time: "8. 38 pm" },
  { type: "sent", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 12.", time: "8. 38 pm" },
  { type: "draft", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 13.", time: "8. 38 pm" },
  { type: "spam", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 14.", time: "8. 38 pm" },
  { type: "important", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 15.", time: "8. 38 pm" },
  { type: "bin", to: "", from: "Teddy", header: "This is the subject of the message.", body: "This is the body of the message 16.", time: "8. 38 pm" },
]

const EmailComponent = ({ user } : { user: any }) => {
  const [selectedTab, setSelectedTab] = useState("inbox");
  const [showPreview, setShowPreview] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div>
      {showCompose && <Compose user={user} setShowCompose={setShowCompose} />}
      <Tabs defaultValue='inbox' className='flex gap-4'>
        {/** Links */}
        <TabsList className='w-[30%]'>
          <div onClick={() => setShowCompose(true)} className='flex gap-2 text-white cursor-pointer w-full text-lg p-3 bg-green-500 rounded-lg justify-center items-center font-medium mb-4 -mt-32'>
            <Plus />
            <p>Compose</p>
          </div>
          {tabs.map((tab, index) => {
            return (
              <TabsTrigger key={index} className='cursor-default' value={tab.name} onClick={() => { setSelectedTab(tab.name); setShowPreview(true); }}>
                <div className={`flex group justify-between w-full cursor-pointer p-2 hover:text-blue-600 hover:bg-blue-200 ${selectedTab === tab.name && "bg-blue-200 text-blue-600"} rounded-xl`}>
                  <div className='flex gap-4'>
                    <tab.icon />
                    <p className='capitalize'>{tab.name}</p>
                  </div>
                  <p className={`group-hover:text-blue-400 ${selectedTab === tab.name && "text-blue-400"}`}>{tab.num}</p>
                </div>
              </TabsTrigger>
            )
          })}
        </TabsList>

        {/** Content */}
        <ScrollArea className='bg-white w-[70%] h-[100vh] p-4 rounded-xl'>
          <MessageHeader selectedTab={selectedTab} />
          {messages.map((message, index) => (
            <TabsContent key={index} value={message.type} className='w-full'>
              {showPreview &&
                <MessagePreview setSelectedMessage={setSelectedMessage} key={index} message={message} setShowPreview={setShowPreview} />
              }
            </TabsContent>
          ))}

          {!showPreview && 
            <MessageComponent message={selectedMessage} setShowPreview={setShowPreview} />
          }
        </ScrollArea>
      </Tabs>

    </div>
  );
}

export default EmailComponent;
