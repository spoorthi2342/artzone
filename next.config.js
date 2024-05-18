// @ts-nocheck
 
/**
 *  @type {import('next').NextConfig} 
 */

    // output :'export',
    // images:{unoptimized:true}
    module.exports = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'files.stripe.com',
              
            },
          ],
        },
      }

   
 