"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BrideGroom() {
  return (
    <section className="bg-[#F9F6F1] py-24">

      <div className="container mx-auto px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="uppercase tracking-[6px] text-[#B68D40]">
            Bride & Groom
          </p>

          <h2 className="font-script text-6xl mt-5 text-[#333]">
            Our Wedding
          </h2>

          <p className="max-w-xl mx-auto mt-8 text-gray-600 leading-8">
            Dan di antara tanda-tanda kekuasaan-Nya ialah
            Dia menciptakan pasangan hidup agar kamu
            memperoleh ketenangan.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Bride */}

          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <div className="mx-auto w-72 h-72 relative rounded-full overflow-hidden border-8 border-white shadow-xl">

              <Image
                src="/images/bride.jpg"
                fill
                alt=""
                className="object-cover"
              />

            </div>

            <h3 className="font-script text-5xl mt-8">
              Wiwik
            </h3>

            <p className="mt-3 text-gray-600">
              Putri Pertama dari
            </p>

            <h4 className="font-semibold mt-3">
              Bapak ....
            </h4>

            <p>&</p>

            <h4 className="font-semibold">
              Ibu ....
            </h4>

          </motion.div>

          {/* Groom */}

          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >

            <div className="mx-auto w-72 h-72 relative rounded-full overflow-hidden border-8 border-white shadow-xl">

              <Image
                src="/images/groom.jpg"
                fill
                alt=""
                className="object-cover"
              />

            </div>

            <h3 className="font-script text-5xl mt-8">
              Yudi
            </h3>

            <p className="mt-3 text-gray-600">
              Putra Kedua dari
            </p>

            <h4 className="font-semibold mt-3">
              Bapak ....
            </h4>

            <p>&</p>

            <h4 className="font-semibold">
              Ibu ....
            </h4>

          </motion.div>

        </div>

      </div>

    </section>
  );
}