'use client';

import { Avatar, AvatarImage, AvatarFallback } from 'brutalist-ui';

export default function AvatarPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-black mb-4">Avatar</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    An image element with a fallback for representing the user.
                </p>
            </div>

            {/* Basic Example */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Basic Usage</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Sizes */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Sizes</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar size="sm">
                            <AvatarFallback>SM</AvatarFallback>
                        </Avatar>
                        <Avatar size="default">
                            <AvatarFallback>MD</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarFallback>LG</AvatarFallback>
                        </Avatar>
                        <Avatar size="xl">
                            <AvatarFallback>XL</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar size="default"><AvatarFallback>MD</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
<Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>`}</code>
                </pre>
            </section>

            {/* Shape */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Shape</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar shape="square" size="lg">
                            <AvatarFallback>SQ</AvatarFallback>
                        </Avatar>
                        <Avatar shape="rounded" size="lg">
                            <AvatarFallback>RD</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar shape="square"><AvatarFallback>SQ</AvatarFallback></Avatar>
<Avatar shape="rounded"><AvatarFallback>RD</AvatarFallback></Avatar>`}</code>
                </pre>
            </section>

            {/* With Fallback */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Fallback</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    When the image fails to load, the fallback content is displayed.
                </p>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex items-center gap-4">
                        <Avatar size="lg">
                            <AvatarImage src="/broken-image.jpg" alt="User" />
                            <AvatarFallback className="bg-[#FF6B6B] text-white">JD</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarImage src="/broken-image.jpg" alt="User" />
                            <AvatarFallback className="bg-[#4ECDC4] text-white">AB</AvatarFallback>
                        </Avatar>
                        <Avatar size="lg">
                            <AvatarImage src="/broken-image.jpg" alt="User" />
                            <AvatarFallback className="bg-[#FFE66D] text-black">XY</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<Avatar>
  <AvatarImage src="/broken-image.jpg" alt="User" />
  <AvatarFallback className="bg-[#FF6B6B] text-white">JD</AvatarFallback>
</Avatar>`}</code>
                </pre>
            </section>

            {/* Group */}
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Avatar Group</h2>
                <div className="p-6 bg-white dark:bg-gray-900 border-3 border-black dark:border-white">
                    <div className="flex -space-x-3">
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarFallback className="bg-[#FF6B6B] text-white">A</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarFallback className="bg-[#4ECDC4] text-white">B</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarFallback className="bg-[#FFE66D] text-black">C</AvatarFallback>
                        </Avatar>
                        <Avatar className="border-4 border-white dark:border-gray-900">
                            <AvatarFallback className="bg-gray-500 text-white">+3</AvatarFallback>
                        </Avatar>
                    </div>
                </div>
                <pre className="p-4 bg-gray-100 dark:bg-gray-800 border-3 border-black dark:border-white overflow-x-auto">
                    <code>{`<div className="flex -space-x-3">
  <Avatar className="border-4 border-white">
    <AvatarFallback className="bg-[#FF6B6B] text-white">A</AvatarFallback>
  </Avatar>
  <Avatar className="border-4 border-white">
    <AvatarFallback className="bg-[#4ECDC4] text-white">B</AvatarFallback>
  </Avatar>
  {/* ... */}
</div>`}</code>
                </pre>
            </section>
        </div>
    );
}
