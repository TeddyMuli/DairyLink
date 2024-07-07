import { Mail, MessageCircleWarning, Pen, Plus, Send, Star, Trash2, TriangleAlert } from 'lucide-react';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Page = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-3xl font-bold'>Complaints</p>
      <Tabs defaultValue='inbox' className='flex gap-4'>
        {/** Links */}
        <TabsList className='w-[30%]'>
          <div className='flex gap-2 p-3 bg-green-500 rounded-lg justify-center font-medium mb-4'><Plus />Compose</div>
          <TabsTrigger value="inbox"><Mail className='mr-4' />Inbox<div className=''>1200</div></TabsTrigger>
          <TabsTrigger value="starred"><Star className='mr-4' />Starred</TabsTrigger>
          <TabsTrigger value="sent"><Send className='mr-4' />Sent</TabsTrigger>
          <TabsTrigger value="draft"><Pen className='mr-4' />Draft</TabsTrigger>
          <TabsTrigger value="spam"><TriangleAlert className='mr-4' />Spam</TabsTrigger>
          <TabsTrigger value="important"><MessageCircleWarning className='mr-4' />Important</TabsTrigger>
          <TabsTrigger value="bin"><Trash2 className='mr-4' />Bin</TabsTrigger>
        </TabsList>

        {/** Content */}
        <div className='bg-white w-[70%] p-4 rounded-xl'>
          {/** Inbox */}
          <TabsContent value="inbox" className='w-full'>
            <p>Inbox</p>
          </TabsContent>

          {/** Starred */}
          <TabsContent value="starred" className='w-full'>
          <p>Starred</p>
          </TabsContent>

          {/** Sent */}
          <TabsContent value="sent" className='w-full'>
            <p>Sent</p>
          </TabsContent>

          {/** Draft */}
          <TabsContent value="draft" className='w-full'>
            <p>Draft</p>
          </TabsContent>

          {/** Spam */}
          <TabsContent value="spam" className='w-full'>
          <p>Spam</p>
          </TabsContent>

          {/** Important */}
          <TabsContent value="important" className='w-full'>
          <p>Important</p>
          </TabsContent>

          {/** Bin */}
          <TabsContent value="bin" className='w-full'>
          <p>Bin</p>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default Page;
