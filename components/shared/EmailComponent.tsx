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
import MessageComponent from './MessageComponent';
import MessageHeader from './MessageHeader';

const tabs = [
  { name: "inbox", icon: Mail, num: 4500 },
  { name: "starred", icon: Star, num: 30 },
  { name: "sent", icon: Send, num: 560 },
  { name: "draft", icon: Pen, num: 9 },
  { name: "spam", icon: TriangleAlert, num: 377 },
  { name: "important", icon: MessageCircleWarning, num: 689 },
  { name: "bin", icon: Trash2, num: 142 },
]

const EmailComponent = () => {
  const [selectedTab, setSelectedTab] = useState("inbox");

  return (
    <>
      <Tabs defaultValue='inbox' className='flex gap-4'>
        {/** Links */}
        <TabsList className='w-[30%]'>
          <div className='flex gap-2 text-white cursor-pointer w-full text-lg p-3 bg-green-500 rounded-lg justify-center items-center font-medium mb-4'>
            <Plus />
            <p>Compose</p>
          </div>
          {tabs.map((tab, index) => {
            return (
              <TabsTrigger key={index} className='cursor-default' value={tab.name} onClick={() => setSelectedTab(tab.name)}>
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
        <div className='bg-white w-[70%] p-4 rounded-xl'>
          {/** Inbox */}
          <TabsContent value="inbox" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Starred */}
          <TabsContent value="starred" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Sent */}
          <TabsContent value="sent" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Draft */}
          <TabsContent value="draft" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Spam */}
          <TabsContent value="spam" className='w-full'>
          <MessageHeader selectedTab={selectedTab} /> 
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Important */}
          <TabsContent value="important" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>

          {/** Bin */}
          <TabsContent value="bin" className='w-full'>
            <MessageHeader selectedTab={selectedTab} />
            {/** Inbox */}
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
            <MessageComponent />
          </TabsContent>
        </div>
      </Tabs>

    </>
  );
}

export default EmailComponent;
