import React from "react";
import Image from "next/image";

export default function Home() {
    return (
        // Main container for the page content.
        // Fills the entire viewport height and centers its children both vertically and horizontally.
        <main className='flex items-center justify-center min-h-screen text-white'>
            {/* The content box.
              - Semi-transparent black background (80% opacity) to allow some background image to shine through.
              - Rounded corners and neon glow for visual depth.
              - A subtle neon green border for definition.
              - Fills the full viewport height and is max 800px wide.
          */}
            <div className='bg-black/80 w-full max-w-[800px] min-h-screen rounded-xl shadow-[0_0_40px_rgba(0,255,0,0.6)] border border-green-500/20 p-8'>
                {/* Inner content container.
                  - Uses flex column layout to stack content vertically.
                  - Centers all items and text.
                  - Takes full height of the parent so content can be centered if needed.
                  - Adds vertical spacing between elements.
              */}
                <div className='flex flex-col items-center text-center h-full space-y-4'>
                    <h1 className='text-4xl font-bold'>Chloe Knutsen</h1>
                    <h3>Full Stack Developer</h3>
                    <h4>Software Engineer</h4>
                    <h5>AI Data Analyst</h5>
                    {/* Add image using Next.js Image component for optimized loading. As you see on the import on line 2*/}
                    <Image
                        src='/developer-avatar.png'
                        alt='Profile-pic of A typical web-developer'
                        height={200}
                        width={200}
                        className='rounded-full mt-4 mb-8'
                    />
                    <p className='text-gray-400 mt-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc facilisis bibendum nisi, a dignissim enim. Aliquam
                        non tellus vitae erat finibus porttitor a sit amet orci.
                        Ut quis felis nunc. Etiam viverra vel nisi vel ultrices.
                        Donec cursus magna vel dui hendrerit, nec pretium dolor
                        consectetur. Nulla scelerisque felis in mi volutpat
                        tincidunt. In pretium auctor nisl euismod suscipit.
                        Donec sit amet justo vel lacus dictum aliquet. Aliquam
                        varius ante quis nunc tincidunt dictum. Vestibulum non
                        sollicitudin dolor. Quisque id ipsum dui. Aenean eu quam
                        in sem molestie mollis. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Aenean pharetra, ligula
                        sit amet vestibulum tempor, sem lorem elementum odio,
                        sed iaculis nisl neque eu mi. Aliquam cursus arcu at
                        interdum convallis. Morbi porttitor nisi in pellentesque
                        porta. Aliquam et imperdiet dui. Mauris eget mi at nisl
                        consectetur posuere non non orci. In quis metus sit amet
                        tortor vestibulum aliquet ac nec libero. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Donec in
                        nunc ac orci efficitur interdum. Sed blandit sapien sed
                        lectus pharetra convallis. Aenean porttitor a nunc ac
                        tincidunt. Proin at massa vehicula ipsum imperdiet
                        eleifend ut vel elit. Nulla tellus massa, tincidunt eu
                        nisl ut, malesuada dictum augue. Morbi non posuere est.
                        Mauris non suscipit nisi. Donec porta finibus
                        pellentesque. Curabitur elementum magna ut sodales
                        consectetur. In eget sagittis tellus, a cursus eros.
                        Nullam pulvinar sollicitudin ligula. Mauris velit quam,
                        auctor eu dui ac, interdum varius augue. Vestibulum
                        congue tincidunt sapien, in volutpat quam fermentum in.
                        Curabitur elementum tempus mauris, ac aliquam sem tempor
                        quis. Nullam maximus tellus orci, vitae laoreet justo
                        dictum sed. Donec vestibulum sed nisl at venenatis.
                        Praesent sit amet interdum neque. Curabitur ut suscipit
                        dui, vel placerat tortor. Aenean et velit vitae urna
                        pellentesque condimentum. Vivamus ut semper lorem, quis
                        cursus nisl. Aenean ut neque in nisl tristique convallis
                        eu id leo. Nullam molestie nisl in velit condimentum, et
                        faucibus ipsum euismod. Mauris in consectetur justo, at
                        vestibulum tellus. Ut imperdiet massa et tempor
                        tristique.
                    </p>
                    <p className='text-gray-400 mt-16'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc facilisis bibendum nisi, a dignissim enim. Aliquam
                        non tellus vitae erat finibus porttitor a sit amet orci.
                        Ut quis felis nunc. Etiam viverra vel nisi vel ultrices.
                        Donec cursus magna vel dui hendrerit, nec pretium dolor
                        consectetur. Nulla scelerisque felis in mi volutpat
                        tincidunt. In pretium auctor nisl euismod suscipit.
                        Donec sit amet justo vel lacus dictum aliquet. Aliquam
                        varius ante quis nunc tincidunt dictum. Vestibulum non
                        sollicitudin dolor. Quisque id ipsum dui. Aenean eu quam
                        in sem molestie mollis. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Aenean pharetra, ligula
                        sit amet vestibulum tempor, sem lorem elementum odio,
                        sed iaculis nisl neque eu mi. Aliquam cursus arcu at
                        interdum convallis. Morbi porttitor nisi in pellentesque
                        porta. Aliquam et imperdiet dui. Mauris eget mi at nisl
                        consectetur posuere non non orci. In quis metus sit amet
                        tortor vestibulum aliquet ac nec libero. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit. Donec in
                        nunc ac orci efficitur interdum. Sed blandit sapien sed
                        lectus pharetra convallis. Aenean porttitor a nunc ac
                        tincidunt. Proin at massa vehicula ipsum imperdiet
                        eleifend ut vel elit. Nulla tellus massa, tincidunt eu
                        nisl ut, malesuada dictum augue. Morbi non posuere est.
                        Mauris non suscipit nisi. Donec porta finibus
                        pellentesque. Curabitur elementum magna ut sodales
                        consectetur. In eget sagittis tellus, a cursus eros.
                        Nullam pulvinar sollicitudin ligula. Mauris velit quam,
                        auctor eu dui ac, interdum varius augue. Vestibulum
                        congue tincidunt sapien, in volutpat quam fermentum in.
                        Curabitur elementum tempus mauris, ac aliquam sem tempor
                        quis. Nullam maximus tellus orci, vitae laoreet justo
                        dictum sed. Donec vestibulum sed nisl at venenatis.
                        Praesent sit amet interdum neque. Curabitur ut suscipit
                        dui, vel placerat tortor. Aenean et velit vitae urna
                        pellentesque condimentum. Vivamus ut semper lorem, quis
                        cursus nisl. Aenean ut neque in nisl tristique convallis
                        eu id leo. Nullam molestie nisl in velit condimentum, et
                        faucibus ipsum euismod. Mauris in consectetur justo, at
                        vestibulum tellus. Ut imperdiet massa et tempor
                        tristique.
                    </p>
                </div>
            </div>
        </main>
    );
}
