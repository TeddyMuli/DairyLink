"use client";

import React, { useEffect, useState } from 'react';
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
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getAllCooperatives, getMessageContent, getMessages } from '@/queries/get_queries';
import useSupabaseBrowser from '@/utils/supabase-browser';
import { supabase } from '@/utils/create_client';
import { User } from '@supabase/supabase-js';

const EmailComponent = ({ user } : { user: any }) => {
  const supabaseBrowser = useSupabaseBrowser();

  const [selectedTab, setSelectedTab] = useState("inbox");
  const [showPreview, setShowPreview] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [showCompose, setShowCompose] = useState(false);
  const [messagesContent, setMessagesContent] = useState([]);

  const { data: messages, error: messagesError, isLoading: messagesIsLoading } = useQuery(getMessages(supabaseBrowser, user?.id));

  useEffect(() => {
    if (messages && Array.isArray(messages)) {
      const fetchContent = async () => {
        const contentPromises = messages.map(message => getMessageContent(supabaseBrowser, message.message_id));
        const content = await Promise.all(contentPromises);
        
        // Extract the data from each content object and set messagesContent to the desired format
        const formattedContent = content.map(item => item?.data[0]); // Assuming each data array contains one object
        setMessagesContent(formattedContent);
      };
      fetchContent();
    }
  }, [messages, supabaseBrowser]);

  const countMessageType = (type: string) => {
    return messagesContent.filter(message => message?.type === type).length;
  };

  const tabs = [
    { name: "inbox", icon: Mail, num: countMessageType("inbox") },
    { name: "starred", icon: Star, num: countMessageType("starred") },
    { name: "sent", icon: Send, num: countMessageType("sent") },
    { name: "draft", icon: Pen, num: countMessageType("draft") },
    { name: "spam", icon: TriangleAlert, num: countMessageType("spam") },
    { name: "important", icon: MessageCircleWarning, num: countMessageType("important") },
    { name: "bin", icon: Trash2, num: countMessageType("bin") },
  ];

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
          {messagesContent?.map((message, index) => (
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
