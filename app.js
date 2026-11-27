// Format: nama | nama latin | habitat | makanan/ciri | fakta seru
const hewan = [
"Orangutan|Pongo pygmaeus|Hutan hujan Kalimantan & Sumatra|Buah, daun muda, serangga|Membuat sarang baru di pohon tiap malam.",
"Komodo|Varanus komodoensis|Savana Pulau Komodo, NTT|Rusa, babi hutan, bangkai|Kadal terbesar di dunia.",
"Cenderawasih|Paradisaeidae|Hutan Papua|Buah dan serangga|Jantan menari untuk memikat betina.",
"Harimau Sumatra|Panthera tigris sumatrae|Hutan Sumatra|Rusa dan babi hutan|Belangnya lebih sempit dan rapat.",
"Badak Jawa|Rhinoceros sondaicus|Ujung Kulon, Banten|Daun, tunas, buah|Bercula satu dan sangat langka.",
"Gajah Sumatra|Elephas maximus sumatranus|Hutan Sumatra|Rumput, daun, kulit kayu|Belalainya bisa mengambil benda sekecil kacang.",
"Anoa|Bubalus depressicornis|Hutan Sulawesi|Rumput, daun, buah|Kerbau kerdil asli Sulawesi.",
"Babirusa|Babyrousa|Hutan Sulawesi|Buah, umbi, daun|Taringnya melengkung ke atas.",
"Tarsius|Tarsius|Hutan Sulawesi|Serangga|Matanya besar dan aktif di malam hari.",
"Bekantan|Nasalis larvatus|Hutan bakau Kalimantan|Daun dan buah bakau|Hidungnya besar dan pandai berenang.",
"Owa Jawa|Hylobates moloch|Hutan Jawa Barat|Buah dan daun|Bernyanyi nyaring di pagi hari.",
"Elang Jawa|Nisaetus bartelsi|Hutan pegunungan Jawa|Tikus, burung kecil, kadal|Mirip burung Garuda lambang negara.",
"Jalak Bali|Leucopsar rothschildi|Hutan Bali Barat|Serangga dan buah|Bulu putih dengan mata biru.",
"Maleo|Macrocephalon maleo|Pantai dan hutan Sulawesi|Biji dan serangga|Mengubur telur di pasir hangat.",
"Kasuari|Casuarius|Hutan Papua|Buah yang jatuh|Berkaki kuat dan tak bisa terbang.",
"Kuskus|Phalanger|Hutan Papua dan Maluku|Daun dan buah|Punya kantong seperti kanguru.",
"Dugong|Dugong dugon|Padang lamun di laut|Lamun|Dijuluki putri duyung.",
"Penyu Hijau|Chelonia mydas|Laut dan pantai tropis|Lamun dan alga|Bertelur di pantai tempat ia menetas.",
"Pesut Mahakam|Orcaella brevirostris|Sungai Mahakam|Ikan dan udang|Lumba-lumba air tawar.",
"Arwana|Scleropages|Sungai dan rawa Kalimantan|Ikan kecil dan serangga|Bisa melompat menangkap serangga.",
"Pari Manta|Mobula birostris|Laut Raja Ampat|Plankton|Sayapnya selebar beberapa meter.",
"Kukang|Nycticebus|Hutan Sumatra, Jawa, Kalimantan|Buah, getah, serangga|Bergerak pelan dan aktif malam hari.",
"Trenggiling|Manis javanica|Hutan Sumatra, Jawa, Kalimantan|Semut dan rayap|Menggulung diri saat merasa takut.",
"Enggang|Buceros rhinoceros|Hutan Kalimantan|Buah ara|Paruhnya besar dan bercula.",
"Kakatua Jambul Kuning|Cacatua sulphurea|Sulawesi dan Nusa Tenggara|Biji dan buah|Jambul kuningnya bisa ditegakkan."
];

const tumbuhan = [
"Rafflesia|Rafflesia arnoldii|Hutan hujan Sumatra|Tak berdaun, menumpang pada inang|Bunga terbesar di dunia.",
"Anggrek Bulan|Phalaenopsis amabilis|Menempel di batang pohon|Akar menyerap embun dan udara|Bunga nasional puspa pesona.",
"Kantong Semar|Nepenthes|Rawa dan hutan lembap|Daun berbentuk kantong|Mencerna serangga yang tercebur.",
"Bunga Bangkai|Amorphophallus titanum|Hutan Sumatra|Bunga setinggi orang dewasa|Baunya seperti bangkai.",
"Melati|Jasminum sambac|Pekarangan dan kebun|Bunga putih yang harum|Bunga nasional puspa bangsa.",
"Teratai|Nelumbo nucifera|Kolam dan rawa|Daun lebar mengapung|Daunnya menolak air.",
"Jati|Tectona grandis|Hutan Jawa|Pohon tinggi berkayu keras|Kayunya awet dan kuat.",
"Bambu|Bambusoideae|Seluruh Indonesia|Batang berongga dan beruas|Beberapa jenis tumbuh sangat cepat.",
"Kelapa|Cocos nucifera|Pantai tropis|Buah berair manis|Hampir semua bagiannya bisa dimanfaatkan.",
"Pala|Myristica fragrans|Kepulauan Banda, Maluku|Bijinya jadi rempah|Dulu diburu bangsa-bangsa dunia.",
"Cengkih|Syzygium aromaticum|Maluku|Tunas bunga dikeringkan|Dipakai sebagai rempah.",
"Kayu Manis|Cinnamomum burmannii|Sumatra|Kulit batang harum|Jadi rempah dan bahan teh.",
"Edelweiss Jawa|Anaphalis javanica|Gunung tinggi di Jawa|Bunga kering tak mudah layu|Disebut bunga abadi.",
"Bakau|Rhizophora|Pantai berlumpur|Akar menopang batang|Menahan ombak dan abrasi.",
"Kemenyan|Styrax benzoin|Sumatra Utara|Getah berbau wangi|Getahnya dipakai untuk dupa.",
"Ulin|Eusideroxylon zwageri|Hutan Kalimantan|Kayu sangat keras|Dijuluki kayu besi.",
"Meranti|Shorea|Hutan hujan Kalimantan|Pohon menjulang tinggi|Kayunya banyak dimanfaatkan.",
"Durian|Durio zibethinus|Hutan tropis|Kulit berduri|Si raja buah beraroma kuat.",
"Salak|Salacca zalacca|Jawa dan Bali|Kulit bersisik|Kulitnya mirip kulit ular.",
"Manggis|Garcinia mangostana|Daerah tropis|Kulit ungu tebal|Si ratu buah-buahan.",
"Sagu|Metroxylon sagu|Rawa Papua dan Maluku|Batang menyimpan pati|Makanan pokok warga Papua.",
"Anggrek Hitam|Coelogyne pandurata|Hutan Kalimantan|Bibir bunga bermotif hitam|Asli dari Kalimantan.",
"Cendana|Santalum album|Nusa Tenggara Timur|Kayu berbau harum|Terkenal sebagai kayu wangi.",
"Beringin|Ficus benjamina|Seluruh Indonesia|Akar gantung|Lambang sila ketiga Pancasila.",
"Pakis Tiang|Cyathea|Hutan pegunungan|Daun muda menggulung|Berkembang biak dengan spora."
];

const detailTumbuhan = [
  {ciri:"Bunganya sangat besar, berwarna merah dengan bercak putih.", fakta:"Rafflesia mengeluarkan bau seperti daging busuk untuk menarik serangga penyerbuk.", gambar:"https://images.openai.com/static-rsc-4/3lDhv7vXQcGYKEEoTGXzA2oif-ySZgaJMdwG_ovOfuJZgPLdr5TjKFEqiIj1fpTh5MZD3_3DSwG0-eTr9Cw0T6JLXRPwCmNRbCU_89jHhE9RH6vqW_qMNEht7x1A9oPb1NOd7E_GOAEZaOGfWyGQ51L-o6Y7TmKRf10V6VPraKM?purpose=inline", sumber:"https://www.inews.id/travel/destinasi/10-fakta-unik-indonesia-yang-mendunia-nomor-9-terbanyak-di-dunia"},
  {ciri:"Memiliki bunga putih dengan bentuk menyerupai bulan.", fakta:"Anggrek bulan merupakan salah satu bunga nasional Indonesia, dikenal sebagai puspa pesona.", gambar:"https://images.openai.com/static-rsc-4/YzyOIOKfIvU8Vh-wRe6DGrNdx7jo8refj9W0wfLMr49KkquiDWngQKi6hH99S3wn7UAx92qUQRPCCvHKWuscOOA22Q7kZFOomm1U9vJikt8H8LQ53dWhBRcWqYJitfs7dSPZMoLZHmNygVpptKiihlHQm4NGTykdkdyEPvly_2k?purpose=inline", sumber:"https://sciencephotogallery.com/featured/1-moon-orchid-phalaenopsis-amabilis-pascal-goetgheluckscience-photo-library.html"},
  {ciri:"Daunnya berbentuk kantong yang dapat menampung cairan.", fakta:"Kantong semar menangkap dan mencerna serangga menggunakan kantongnya.", gambar:"https://images.openai.com/static-rsc-4/bLYLSzXoRtSC71kY2XU6KqSCrX_YxbRBUflIM8gbeDh0bO7pGIJPPJxP9O0HYiPpxKW8WYvEhNUXV1jfU0LIDlmI4xbIvQvxRI4o6iRhhNdVS32bz9YdLTQMU1d-0Y6G0382oq7ljEld4AFi1Dd0jyP4CrrwOtnyuununCi_-2aTG8zSsABMEGI-RNWED7CW?purpose=inline", sumber:""},
  {ciri:"Memiliki bunga sangat besar dan mengeluarkan bau busuk.", fakta:"Perbungaannya dapat tumbuh sangat tinggi dan tidak mekar setiap tahun.", gambar:"https://images.openai.com/static-rsc-4/VqfaDyXQ_lcOx4oFk_RuAY89dxyBcb06nHxAuJY8eICab8HJn7phN5K8R2HvyuNehjkfLBJXB2l3o28p9Cyd2kEVvqinYRlPBsb7O6HfbIeiwsJXcSeP-qX4E6esy-1-WwC6N77WJvEgnJx9fF7acoNCUAIlA20QJTbuIU-bRkI?purpose=inline", sumber:"https://www.eviindrawanto.com/2011/12/bunga-bangkai-raksasa-di-kebun-raya-bogor/"},
  {ciri:"Bunganya kecil, berwarna putih, dan beraroma harum.", fakta:"Melati putih adalah bunga nasional Indonesia yang dikenal sebagai puspa bangsa.", gambar:"https://images.openai.com/static-rsc-4/1YxaiOqwEFDbxvFada8L5iYcb0PGmzwxOiaODVpoJGTPBoNRK81oIrJD0P2NsWmvHq905oRErpc5QuEjXqnoDvnYBpIaw7Ps_RwAkESen8RHS4a_jCOQuHq2OcjMcuSzxdVxam2JY6PMXnuLkOdBC5g90-qmSUa-N2def3Xax1k?purpose=inline", sumber:"https://www.leparisien.fr/jardin/plantes/jasmin-darabie-HJQL3RAT4NBIDIKAWOV5VX3PXM.php"},
  {ciri:"Memiliki bunga indah dan daun lebar yang tumbuh di perairan.", fakta:"Permukaan daunnya membuat air dan kotoran mudah menggelinding sehingga relatif tetap bersih.", gambar:"https://images.openai.com/static-rsc-4/p3eqaYFkwhs-WvFXMF6lpEZjl_YHMJBZtzusPDA7Pjd9nNhCvCKUGPsapJfZtSiHluubMmxZHaXo4h73QZupBo4q-k0HYI6zhtqXV9FFMRBFKAFnDuHo3POh7mIq7tualVemvTD5I7yTCF8TIkqgDoqnGdGAabtcaywYWtVOwTc?purpose=inline", sumber:"https://commons.wikimedia.org/wiki/File%3ANelumno_nucifera_open_flower_-_botanic_garden_adelaide_edit3.jpg"},
  {ciri:"Memiliki batang besar serta kayu kuat berwarna cokelat.", fakta:"Kayu jati terkenal tahan lama dan banyak digunakan untuk membuat furnitur.", gambar:"https://images.openai.com/static-rsc-4/QXSwoPnlyzArpVqh9CEBLhf5tXu_WF_FzTxYr3FE_7oBDaZugRpW1-PZ1CCwq5zBwnqOJxZNPXOqnBR-sqbnaKyR82zAs8DYlcISOLijXPOfqMYiRkYvytWOKcjpAJ9nL0QgIyUo1jehtATust5KwyFKfjnW-KpJBK7mVAAdKME?purpose=inline", sumber:"https://florafnq.wordpress.com/2011/11/18/tectona-grandis-lamiaceae/"},
  {ciri:"Batangnya beruas-ruas, tumbuh tegak, dan memiliki bentuk beragam.", fakta:"Bambu dapat tumbuh sangat cepat dibandingkan banyak jenis pohon.", gambar:"https://images.openai.com/static-rsc-4/Sfb9bzTYr4Wws-xIGzaSnAyAnuumYUYWCfhFgrOAjJeI8G1X_fQ2MPIAlBrk9o2TLmPAfMa6N1Y2OGhsTu4cCuREXhs3Ge8FRh1z68-bvgy5_NtUAbI9TEGLgM614B-myl-tT4Q7DRxcmMuNW6GhECyIC_jjZAn8ptoK39_Nb18?purpose=inline", sumber:"https://anekaukm.com/article/info/713/mengenal-jenis-jenis-bambu-di-indonesia-dan-pemanfaatannya"},
  {ciri:"Memiliki batang tinggi, daun panjang, dan buah berkulit keras.", fakta:"Hampir seluruh bagian kelapa dapat dimanfaatkan, dari buah, daun, batang, hingga serabutnya.", gambar:"https://images.openai.com/static-rsc-4/OgCCnsBqNL_LmT24N6khTtUU4iKdBQ_EeTPa1akFvm4k1EMA2stfVxXVaNB5VXz-BotmNw-696UQ8OUUAHidemqAUPGurL-FWhw962z5Prk67pdGMLFddl31gAsEOUCQOcXTdMGBChULAHniCu08F166atLXF92qf8raHCfpZIo?purpose=inline", sumber:"https://baumbad.co.uk/blogs/casting-dictionary/watering-coconut-palm"},
  {ciri:"Buahnya bulat, berisi biji pala dan selaput merah yang disebut fuli.", fakta:"Pala berasal dari Kepulauan Banda dan dahulu sangat berharga dalam perdagangan dunia.", gambar:"https://images.openai.com/static-rsc-4/gcDv_c60xCgwpEQhD42ltzRJOnfX2Sx7aY3geLcFMxgcxxWT4PKvcob4riWdV1_AlNRZ7PG3DKja7LJWpWFVhF8qFBN-tsnBszWKZ9_cqRjfxCR2FNpM3fBbjPXXGr07haodDG_0I0WnxkJltEv5j-dQyOhW_gQhffW0diaWiwE?purpose=inline", sumber:"https://wscexport.com/products_detail.php?p=nutmeg_shell"},
  {ciri:"Memiliki kuncup bunga kecil berwarna kemerahan dan beraroma kuat.", fakta:"Cengkih berasal dari Maluku dan digunakan sebagai rempah serta bahan berbagai produk.", gambar:"https://images.openai.com/static-rsc-4/gWREPjfhNdej8uqzhsfXAbGbvdL8s6wDlUrf8e6XvysdHWKU9t4CUfye1IhXwFfLJ7Fu_cqqXjuQ-qqzFopeZ0SRqzsl5D4jiwE7qWvxlRri3fIwM60z5FdWs8k30oWhbWDqScYBa7A1flrjonKSGTl-TTY7rKapUPG7IMW2RLE?purpose=inline", sumber:"https://storage.googleapis.com/duqscppiesbeqe/clove-tree-in-tagalog-meaning.html"},
  {ciri:"Kulit batangnya berwarna cokelat dan beraroma harum khas.", fakta:"Kayu manis diperoleh dari kulit batang yang dikeringkan dan digunakan sebagai bumbu atau minuman.", gambar:"https://images.openai.com/static-rsc-4/hWazkOmIDLe6HR-euhhY1wZudHNsZW1RUw19DQR2Ioyyiu1ihlyA_ueTW4e-VyaNRAYa85G54SrVvZv8kbczn9nKxHbKJzI6BM84dT6KYNSLAW1rIC-clH2it7hKC-xe4VX15LEYphFbyvFVCtwDhWxuvQXLAf6FzWVhZPDWWbY?purpose=inline", sumber:"https://kendhilkencana.blogspot.com/2012/01/cholesterol-7-atherosclerosis-3.html"},
  {ciri:"Memiliki bunga kecil berwarna putih dan daun berbulu.", fakta:"Edelweiss Jawa tumbuh di pegunungan. Julukan bunga abadi bukan berarti bunganya tidak bisa layu atau mati.", gambar:"https://upload.wikimedia.org/wikipedia/commons/2/27/Javanese_Edelwiss_at_Mount_Bromo.jpg", sumber:"https://commons.wikimedia.org/wiki/File:Javanese_Edelwiss_at_Mount_Bromo.jpg"},
  {ciri:"Memiliki akar tunjang yang menopang pohon di tanah berlumpur.", fakta:"Bakau membantu melindungi pantai dari abrasi dan menjadi tempat hidup berbagai hewan.", gambar:"https://images.openai.com/static-rsc-4/5pghX-exBA-Q8zbaklKlmWbZ4L4ZTbHlZd61_sY_RbNDiZQaFrDzpQllTUNJal57gNYEItCHtmuavcz0ZDlQdz7j8MBDob5deE1zAptAQRhpICem1Z_Q_Jp9I4vfDXxMJlpkOTXQTMZF9yarQ9zznSN4w16crmCG6PI43oZ-bfU?purpose=inline", sumber:"https://www.indonesia.travel/gb/en/destination/kalimantan/east-kalimantan/mangrove-sejati/"},
  {ciri:"Memiliki batang berkayu dan menghasilkan getah resin beraroma.", fakta:"Getah kemenyan digunakan sebagai bahan wewangian dan dupa serta telah diperdagangkan sejak lama.", gambar:"https://images.openai.com/static-rsc-4/v8VEQic_6T4PQN_w78DyeHI4dJyovZgC1DFxiAn5wRNfdg0ol_HPTSSBwq4pH-cDKVPkrpiFga7qaZFTU20Ek_xgVpIJ_RQ1GtjIVDV1OsSuBYXW_Lfs_I05p7G9WnNs-m9IUbbOk39aLPiTm10IK0yQFgZqPdlKSyudflytwmA?purpose=inline", sumber:"https://www.disthai.com/17425337/%E0%B8%81%E0%B8%B3%E0%B8%A2%E0%B8%B2%E0%B8%99"},
  {ciri:"Kayunya sangat keras, berat, dan tahan lama.", fakta:"Ulin dijuluki kayu besi karena kekuatan dan ketahanannya.", gambar:"https://images.openai.com/static-rsc-4/JrRamH8p4iWzuylWOV1AlOIB6_vVqtqykwHcxyGmg42rr_7o4xkr08J9hTAAmhd5PCfcVPg71_8K5PH5mHwc4nriaCnCjxSgUTdnxOyGNyvtQAzpFJLxlGBTTMewQ6NkPjQ_Zg8yX77Qrpn7KRD8J6vGNK5TjWs-b1JCvowhhnI?purpose=inline", sumber:"https://syok.my/bm/info/fakta-menarik-mengenai-kayu-pokok-belian"},
  {ciri:"Pohon hutan tropis dengan batang yang tinggi dan besar.", fakta:"Meranti merupakan kelompok pohon penting di hutan Kalimantan dan Sumatra serta menghasilkan kayu yang banyak dimanfaatkan.", gambar:"https://images.openai.com/static-rsc-4/U0jpTIU8b_IojXFAbHh-rsKBt5c8MLrm-eSgrr2PYidJ_u72XuLr43ySzaDDqZyhIJf77TRb69lG-gK7Q1Ha6VxemfP4iGeEvbQ74Vqhg4ACUj5eCxgJtflHGVIOS-j-FgYDSFUsIiNTalVbs_EZM3VhSxiSCP4iqJgUhHDfwio?purpose=inline", sumber:"https://wibnet.nl/natuur/planten/de-10-hoogste-bomen-ter-wereld"},
  {ciri:"Buahnya memiliki kulit berduri tajam dan aroma yang kuat.", fakta:"Durian dikenal sebagai raja buah di Asia Tenggara dan memiliki banyak varietas.", gambar:"https://images.openai.com/static-rsc-4/OlMyTZvntoghl7u2eSbbXong7LOTvmSk3FfQneG0fGoXJxBL4fURDj1-zt4zAa7Wr2JsfnqPGbpPwxK95_4GIVdOZ5mxoXZ4ZoF9Ov1fzGwik7Ekx76cy0RdVciubIynfmMHMWVb6iGxwj12uSyuLVtBFGpYx7DFixVbJE4e8GA?purpose=inline", sumber:"https://www.inaturalist.org/taxa/64444-Durio"},
  {ciri:"Buahnya memiliki kulit bersisik cokelat seperti kulit ular.", fakta:"Salak tumbuh di dekat pangkal tanaman palma; daging buahnya dapat renyah atau manis bergantung varietasnya.", gambar:"https://images.openai.com/static-rsc-4/zaVn67uTxhmFllT5sn4KXS-V3jaEDhcdRHwVcIbD3bbAbSj4Zvu-Z1QP1rHYSR91xps4lOKf3kCNzWq9-W1orRX4LZDVl5auMy-5E1gpLrvrC2vMkkZ1g0IED2Wm9aduBa6GUn06g26jM3nL9gR783_0i1twUjIj0XvTNw11sRY8HofyafRpwTaOCdWt304h?purpose=inline", sumber:""},
  {ciri:"Buahnya berkulit ungu tebal dan memiliki daging putih.", fakta:"Manggis sering disebut ratu buah; bagian dalam kulitnya berwarna ungu pekat.", gambar:"https://images.openai.com/static-rsc-4/6NbxB_py_d4U3_pcCVgKM4kIRC-XUJWYtCTwS4uTZD2-GM5Z6wGPcCheCPk1YJAdvOKtqoJoKsv5yN3M96unxfb3-oVztc4B7ET6kK3iZU2hK8_zg1eXaTC9fqm3iToo54sh_PvYsp8EZXkoaLobqhlHPHIjZpjEK-y76-PUYMlcIZLSJjhcNgqc3ItdifdE?purpose=inline", sumber:""},
  {ciri:"Batangnya besar dan menyimpan pati atau tepung sagu.", fakta:"Sagu menjadi makanan pokok bagi sebagian masyarakat di Papua dan Maluku.", gambar:"https://images.openai.com/static-rsc-4/6qmCHvvM9JNpql8LriYl6tWGqCoWDjI9JSIfXPCAWayb7QnBt8pYnVUgDHLyzlsV_wqqLUoc6NGI9HirRBgCZVturup1qVEejxgZYpmCENaozIy2L-d7uFJ-NrZ0VhlCr1lpZR-Fx4aDuJxP149amVGv0ijr4hJB6QqqH0Vu45A?purpose=inline", sumber:"https://www.kew.org/read-and-watch/palms-of-new-guinea"},
  {ciri:"Bunganya berwarna hijau dengan bagian tengah gelap kehitaman.", fakta:"Anggrek hitam khas Kalimantan tumbuh di lingkungan hutan tertentu.", gambar:"https://images.openai.com/static-rsc-4/15ZKahY3uhvnJL4kXbqBG5nX95FNGXizeYrcKJ9fx7rpavkAbPct9u_aLsxjxZ_VQE2EMrf2hxxW2sA6AlT2mYtxHhKVNDLpMJbwwBuzYFNPMEEWpMzoJOJVotWEwwrTDVTo0Ak87j3uet_FxJc1WfWtfCXpE4vDP3MDNrr0Gjk?purpose=inline", sumber:"https://radartegal.disway.id/lifestyle/read/659291/anggrek-hitam-tanaman-langka-asli-indonesia-yang-harganya-mencapai-ratusan-juta"},
  {ciri:"Kayunya mengandung minyak beraroma harum.", fakta:"Cendana dikenal sebagai sumber minyak sandalwood yang digunakan dalam wewangian.", gambar:"https://images.openai.com/static-rsc-4/F20sIIYqk15fd62e7EEHgI-DG593h-3CXC-Uy1yuojmDRLlb41U_K1zrRIegZgvzn9-S46fJji5ArKv8U8NdWQ6e6bRqFaC-LlHTOIX9dU9VY46nKhZUvlR_g7xISBmhnxEDl6M-kK-cF-qweN7q1aJrUyM1ncgKNmsDO68y4Z9SjoCtPiuR8663HJ-yeE0T?purpose=inline", sumber:""},
  {ciri:"Memiliki tajuk lebar, daun kecil, dan akar yang dapat menjuntai.", fakta:"Beringin dapat menjadi tempat berlindung bagi banyak burung dan hewan lainnya.", gambar:"https://images.openai.com/static-rsc-4/qQ72JVUV5KXcAmTZ0evTTJx9J1UY4UXR6EofD-Y9UlB_tPuHqoQ2E4eipzWIZIMR8K62fwF_Aj9jRIOXZ3tSydI7Q6UPyQcN4RkxHSGOADNGFOy5kmcJUrbujCctQXCNehbkfFxxW_l6wmcIV9Ow-_LysxJpx5aXYwlZeKOLejM?purpose=inline", sumber:"https://pt.todoarboles.com/ficus/"},
  {ciri:"Memiliki batang tegak seperti tiang dan daun besar di bagian atas.", fakta:"Pakis tiang berkembang biak menggunakan spora, bukan biji.", gambar:"https://images.openai.com/static-rsc-4/FUWIYS2cjgvyfdlByHogHPAiFAUssOSEAC4fkPYg-Z7EpQulGu0C_7A5h-Pp02z68Ot1NrCxl1X_EFf9alRCztPlAZ60tT_GS74FQq4XNvuJePAG7JQL2Kz4iX-v9bpHdL_Pb0NsG5T6P8-yHVUemjdywmxTKIw2BoVMVfKdSYviO9_3btC8GbITRsDGBMAa?purpose=inline", sumber:""}
];

const detailHewan = [
  {ciri:"Lengan panjang, rambut cokelat kemerahan, dan tubuh kuat untuk memanjat.", fakta:"Menghabiskan banyak waktu di atas pohon dan dikenal cerdas menggunakan alat sederhana.", gambar:"https://images.openai.com/static-rsc-4/f_b5AERvkr7g-fY8kq7rejvCdXAjo9WiPsKnbeQRjYJ9IrtBqqD2N2vKJ0nZTRrlG6jtrv8tn_kgprpJrnSuimOPB9Ehc8NGPL2RCSCz-MDmCTVfMk8uT8Nw8Myhf48sFV3dVGQLvCqs812u6gfvi8ILxOIw1MXwYHu7mvKKpoc?purpose=inline", sumber:"https://www.dhphoto.cz/klicova-slova/orangutan-bornejsky-pongo-pygmaeus-7892.html"},
  {ciri:"Kadal terbesar di dunia, bertubuh besar, bersisik, dan berekor kuat.", fakta:"Indra penciumannya tajam untuk mendeteksi bau mangsa dari kejauhan.", gambar:"https://www.worldatlas.com/r/w1200/upload/af/eb/83/shutterstock-735647182.jpg", sumber:"https://www.worldatlas.com/articles/indonesia-s-most-iconic-wild-animals-that-you-must-see.html"},
  {ciri:"Memiliki bulu indah berwarna cerah dengan bentuk yang beragam.", fakta:"Burung jantan melakukan tarian khusus untuk menarik perhatian betina.", gambar:"https://images.openai.com/static-rsc-4/sn4pLtPk-SigBdwBY77-HbR6SKKSwhShjyMcx1DDHXHhokyWKo6r5vaj5w-L0C517qkth20wis9hR0UtL4_6k06MEFDgb9F1JSKF8W5EDUwh1MEAtdl33rmipp8Vew0KyjZgmFCD0afrm7NjCjE_oBqGcDUPlmp-niu1Wwqn4Zk?purpose=inline", sumber:"https://www.charismaticplanet.com/wilsons-bird-paradise/"},
  {ciri:"Tubuh relatif kecil dibandingkan harimau lain, dengan garis belang yang rapat.", fakta:"Harimau Sumatra adalah satu-satunya subspesies harimau yang masih hidup di Indonesia.", gambar:"https://images.openai.com/static-rsc-4/P8XLMI74tSYAP-c28BPiF_tSNjxMiH5oasWWXrcTJHW8p-4X4m7IyejGD6pavsr6jheAVH2G6VdRIN2ROP3ru0PYOEhGpdM4qQ9zhcrr9tIR6QllFctTxTvJxSMtNNB-AXykGshr5VSZeXjtZR-oj8q6U_hRfVCqIl8QP28k0C8?purpose=inline", sumber:"https://www.internationaltigerproject.org/tigers/sumatran-tiger-facts/"},
  {ciri:"Kulit tebal berlipat seperti pelindung dan satu cula kecil pada jantan.", fakta:"Badak Jawa sangat langka dan saat ini hidup di kawasan Ujung Kulon.", gambar:"https://images.openai.com/static-rsc-4/I-PXrWRVGEQdzmK-Gq1YZbxRSeU-oznWL6PME61s5aU7wMGjx-cn-yanuVB69LzGkHyrMJixCui0ADhkbhDhpXpYh1ZK-TGv3w0LiaOWA26n-Wllu0zse76xji7cxSdYSBl_sz6jz42bH9OSzWnbPP9Hd2RBcp3IaZCo1kRpCKPzFSVjcrqEeD7GCrhOEw-U?purpose=inline", sumber:"https://www.worldwildlife.org/species/javan-rhino"},
  {ciri:"Memiliki telinga relatif kecil, belalai panjang, dan tubuh besar.", fakta:"Gajah memakai belalainya untuk mengambil makanan, minum, berkomunikasi, dan banyak kegiatan lain.", gambar:"https://images.openai.com/static-rsc-4/35cQo4a98ir4oBrpsyRJuKxF3iSAPz03IsXs_OFO2sJw2qA2sIbhAbcwuhs9kDwBAFd5KgJ05gKozuHuCwKVCVFytSFveiqILQW9rUUUuxRLkvMGwguGxDFrHWq_SWN-u-qBb3D4AhJcMUBDvcpLAR6gGF34OoMY_2WtfZ93oH4?purpose=inline", sumber:"https://www.wwf.id/en/blog/defending-nations-endangered-treasures-sumatran-elephant"},
  {ciri:"Mirip kerbau tetapi berukuran kecil dan memiliki tanduk lurus.", fakta:"Anoa adalah satwa endemik Sulawesi yang dikenal sebagai kerbau kerdil.", gambar:"https://images.openai.com/static-rsc-4/kS1wVi977-gox5sfPxrdBvua75OzRZJ2v3VUl48jm1ycU74QxGTCYTpiIoRyYb7SLYtNv7Ih8N-a4AZd4tetJNw3asDAOFBMZYGD8JKsjyWloqd3omRlR4rn18pnEglaDPycDMhrAejMLSfaq1PZpfu9yisdK1Dc-eeOGA8n5ew?purpose=inline", sumber:"https://www.utakatikotak.com/Hewan-Langka-di-Indonesia-Beserta-Gambar/kongkow/detail/24679"},
  {ciri:"Tubuh menyerupai babi dengan taring panjang melengkung ke atas.", fakta:"Taring atas babirusa jantan tumbuh menembus kulit di bagian atas moncongnya.", gambar:"https://images.openai.com/static-rsc-4/zrlGvbikI2SlzrZSN4bx3Kqv16Nn8xODb-vAMetT13UFBC_LZUQKDnLKrTmgmuyY5Au5ae4HUMwoFUpacUJs71excINUbwJimndleX3ploFCzpgHlNZ8E8IzkifSfN1OxhWsG_UIa2hP5-TO49gzkM7_KPcxi9EdSreTK9lfSpQ?purpose=inline", sumber:"https://www.worldatlas.com/articles/indonesia-s-most-iconic-wild-animals-that-you-must-see.html"},
  {ciri:"Berukuran kecil, bermata sangat besar, dan berkaki belakang panjang.", fakta:"Tarsius dapat melompat jauh dari satu pohon ke pohon lain saat mencari makanan.", gambar:"https://images.openai.com/static-rsc-4/IvkqdHt_e0t-CLHv8RU12cY4-s0czSkFzIKcvtsb5tWCfrTPoUWQLkNi6KCOYorBk_4ZuhJxH05wADsYXH4_SRPt0J87A-2UdPzJVZNo1aguuk_B6-T8I__qgDaBoF4iQo_wIu2OA4CAKbzgtFwiTEENgKQfdGx4Jma0XJZGn1s?purpose=inline", sumber:"https://www.traveloka.com/id-id/explore/destination/hewan-khas-sulawesi-yang-unik-dan-langka-acc/334123"},
  {ciri:"Memiliki hidung panjang dan besar serta rambut cokelat kemerahan.", fakta:"Bekantan pandai berenang dan sering hidup di hutan mangrove serta sekitar sungai.", gambar:"https://images.openai.com/static-rsc-4/dG3T0TyVyV89xNsFV9qa3oF0PQwP9Z3-bUnJOjuiiJNpwJRXhiherv5BcSThraRTDo19JvqBQ_dhgoAz3Lpo5XvUc--YHZqBjnTaa87QDMMyPvgtJ58U9eBQWP8Al_M1VB9aKumbgJjd_Wh-AppN_a5Ejsatjjd1ZVWkOWTCiZo?purpose=inline", sumber:"https://commons.wikimedia.org/wiki/File%3AProboscis_monkey_%28Nasalis_larvatus%29_male_head.jpg"},
  {ciri:"Tubuh ramping, lengan panjang, dan rambut berwarna abu-abu.", fakta:"Owa Jawa berpindah antarpohon dengan berayun menggunakan kedua lengannya.", gambar:"https://images.openai.com/static-rsc-4/wM0h7tOgwBa2NX07d_0Hpd8Dr-6nxtgjFZxWFhrvIgWBxwO5OqibZkfEo_4yCu2fjUzwLZYDqQLqiA0AvXmR0aoorWjehrhQCC6aoM7rZwNZS1H8nWEG429QiIH-Rc9b-19XQmbcvsdYH89S1LpxBSsOXyLMVhCzqlsu_-gUu_k?purpose=inline", sumber:"https://newstasikmalaya.com/owa-jawa-primata-langka-penjaga-hutan-yang-kini-terancam-punah"},
  {ciri:"Memiliki jambul di kepala dan bulu berwarna cokelat.", fakta:"Elang Jawa sering dianggap sebagai simbol yang menginspirasi bentuk Garuda Pancasila.", gambar:"https://images.openai.com/static-rsc-4/0KSxtVKEyMrE4qEvfv0vDyFRbbm1_I-fCrqsUpK45hBztHq4Ova21rMxP7GVtTvfI4jBqtYrkyYQGrUmdiKGYWiXr4-LJvMbJlfcVlilVJ_vCEdTssHXjxmFw-9H7TvzaG4KILjbvOIbvGT2HVa5TUxNnHUCb8RCdwTCPUemXko?purpose=inline", sumber:"https://bawaransel.blogspot.com/2017/02/habitat-elang-jawa-dan-penyebarannya.html"},
  {ciri:"Berbulu putih, berkulit biru di sekitar mata, dengan ujung sayap dan ekor hitam.", fakta:"Jalak Bali adalah burung endemik Bali yang terkenal karena keindahan bulunya.", gambar:"https://images.openai.com/static-rsc-4/b2liJoQ7lFi1EvnYRSDWQHXs2R-y6FSTqaHGrLZ7Zq5MjkLI5XOFCXzxe9r7I2Y_UR1oU3PCG1VwOWzsYz4iXVd_MXU55wSoHUWIb7bAzYdaASPRKjbzUhupu3zZi8hZSzqhgBHS3nSRqv9ffys1ivjc-xXsqLdLWqUtRxb0Fl8?purpose=inline", sumber:"https://kureansiklopedi.com/tr/detay/bali-myna-leucopsar-rothschildi-21e84"},
  {ciri:"Memiliki tonjolan besar di kepala dan bulu hitam serta putih.", fakta:"Maleo mengubur telurnya di pasir hangat atau tanah yang dipanaskan oleh panas bumi.", gambar:"https://images.openai.com/static-rsc-4/31Hs-sU1jT-cdVqk3yIaTLcgmKvj6nIq9wzplMBD-gXTM-n5ofhHqTIZ7JIfNJBXAWuX6x-P12mtSFUsS4tq0vkTvWb-cQfB0no_apsK77APcWC82biIeqYZgUt89aevWbJudCfyw2sdlLzXsLguz4BeJhwDsfCjqacWVyg89Q8?purpose=inline", sumber:"https://birdsoftheworld.org/bow/species/maleo1/cur/multimedia?media=photos"},
  {ciri:"Tubuh besar, bulu gelap, leher cerah, dan helm keras di kepala.", fakta:"Kasuari membantu menyebarkan biji dari buah yang dimakannya.", gambar:"https://images.openai.com/static-rsc-4/k5iME2Z8ZPVOm-aqSCkwkFTTssPl3FtARz8Y52QGYa7483O76hvMNltgtP9DBBdxYvVP5r7A2PWlpS4nJgiPHYx0DkB7nCVp_V2b10GY2Ufq0eH5iF3MmAPi0y66ng_Fk1EixrXrkwaveX9Wi8vyRc24AElkJ9J2KVkIToeVsh8?purpose=inline", sumber:"https://birdfact.com/articles/are-cassowaries-dangerous"},
  {ciri:"Memiliki mata besar, bulu tebal, dan ekor yang dapat membantu mencengkeram.", fakta:"Kuskus adalah hewan berkantung yang hidup di pepohonan dan banyak ditemukan di Indonesia bagian timur.", gambar:"https://images.openai.com/static-rsc-4/15jcmSkar9TL9LmUbQ1k7Ljnw___N7WKvOgJ8lxPkMypjpVxXQZpY8MdzEfQu0mxO5MunMj6p0X9l0tXVftr7tYWiroMmUWWnFX2gaCuqsLZIayVtJR0XdWAhtlJCv3mtrMVQzbXesgVatYL9nT2xdaChmxf06bHnL-pr4QvwwA?purpose=inline", sumber:"https://www.inaturalist.org/taxa/42845-Ailurops-ursinus"},
  {ciri:"Tubuh besar, ekor seperti lumba-lumba, dan moncong mengarah ke bawah.", fakta:"Dugong dijuluki sapi laut karena memakan lamun di perairan dangkal.", gambar:"https://images.openai.com/static-rsc-4/Z88cCYPfYjS9PSjiwjX6Nu_JjTQ3hJUzff5GBOa6rbOUn33hB58ojg7Y1LfcHRUzpxIk4FKPOfV0oaDwUHnFVzeLqfo2lFjWITLKvW8XCfENEmvjQN_i7z0_A_Im6xmP3HAPOaznz_l0Xnw7Goiu-QsdtUujO80eMHppAvMzmtM?purpose=inline", sumber:"https://dive-red.com/marine-life/"},
  {ciri:"Memiliki tempurung lebar, kaki berbentuk sirip, dan kepala relatif kecil.", fakta:"Penyu hijau dinamai dari warna lemak tubuhnya yang kehijauan, bukan warna tempurungnya.", gambar:"https://images.openai.com/static-rsc-4/TpzqRpwMxUOffxyKwUJUPMiMOafvoiNWngxbGE0UovCOzuHZpXtdrTBP_IUEeFpGu0ScZIYeFu0KIQ3yMv_USsu-G3O1XLPTdYOd91coOplBmVXBa9CR_PjbKBniHf2EcxIdD65WpBsJyp5E1C3qbUZMJDkJDpI10eiHhQpaLlk?purpose=inline", sumber:"https://www.auxbulles.com/decouverte-biologie-tortue_de_mer_verte_chelonia_mydas.html"},
  {ciri:"Kepala bulat, tanpa moncong panjang, dan tubuh berwarna abu-abu.", fakta:"Pesut Mahakam hidup di perairan tawar Sungai Mahakam, Kalimantan Timur.", gambar:"https://images.openai.com/static-rsc-4/k9gma4RSJiWoYHGtEAalPOpBj1s7fCd-fwTL8NISp7Pca6G4eYLAcpv_gsbb8VGwBuKLdIZLDcBL3hhvOwr0kj8UPKJSY-fJyHf_PUe5BSvBtHEjMUUCIsp__LbA2lSCAdpbh2MfJcjq3QK4On9VhYD7nwl_qcwQBIhIXkbDP-I?purpose=inline", sumber:"https://timesindonesia.co.id/pemerintahan/557916/pesut-mahakam-terancam-punah-kementerian-lh-beri-solusi-ini"},
  {ciri:"Tubuh panjang, sisik besar mengilap, dan mulut mengarah ke atas.", fakta:"Arwana Asia menjaga anaknya di dalam mulut (mouthbrooding).", gambar:"https://images.openai.com/static-rsc-4/KVD01TcKHeSNh1RbRAHGROC99XkZg6kxT6BXcK-8Z3FAkxFFvmeEg2rc4WrIO4yWUSRLgjLPQB-lceBjHUXucDCs2C65ipF2p1TICDhxna_LKHVEY4JuoDfsDsE97Geik1l4fUE2Nl4Gh9zifSoS4eWshhoNCqvF0vZdFUd53eU?purpose=inline", sumber:"https://blog.tetra.net/uk-ua/arovana-ryba-drakon-yaka-prynosyt-udachu"},
  {ciri:"Tubuh lebar seperti sayap, sirip dada besar, dan dua sirip kepala seperti tanduk.", fakta:"Pari manta menyaring plankton dari air dan dapat memiliki bentang tubuh yang sangat lebar.", gambar:"https://images.openai.com/static-rsc-4/Ql6n4MeFnFJalhyPuVRgd7QmWQiWDq4wPIy_Uqymp3Hn6Q50_v_lBqWWyCP4tZsbz3BaTiw85lhXU1bFpuPjzS5UlYHvNaoKHGCZhqpsTR955gsvpQLAtZjYWYH5Lm0od_g4OkzNfwGA-MM41yAVWavjzk3eRIfNUHXOgQXc6A0?purpose=inline", sumber:"https://marinemegafauna.org/news/giant-manta-becomes-the-first-manta-ray-to-be-listed-as-an-endangered-species"},
  {ciri:"Memiliki mata besar, tubuh berbulu, dan gerakan lambat.", fakta:"Kukang memiliki racun dari kelenjar di lengan yang dapat bercampur dengan air liurnya.", gambar:"https://upload.wikimedia.org/wikipedia/commons/6/60/Nycticebus_coucang_002.jpg", sumber:"https://commons.wikimedia.org/wiki/File:Nycticebus_coucang_002.jpg"},
  {ciri:"Tubuh dilapisi sisik keras, bermoncong panjang, dan memiliki lidah panjang.", fakta:"Trenggiling menggulung tubuhnya menjadi bola saat merasa terancam.", gambar:"https://images.openai.com/static-rsc-4/M2h0UrqCeecwQQmH5k9Da4BW99G6DI3oAi72IFTSwsrJ8x0dyIs40dqf6Pyb56MZHP9wDtw4FFyA_dWTv0HLuLuP0lEr8WbyANWvaqPEVBS46ZNuf38h0gqs-wa25VXEk4B1ma-Ea1Bz1RFmEw175Io5VurZbLaVv3x9Z5x96q4?purpose=inline", sumber:"https://www.speciesonthebrink.org/species-blog/sunda-pangolin"},
  {ciri:"Memiliki paruh besar dengan tanduk atau balung di bagian atasnya.", fakta:"Enggang membantu menyebarkan biji pohon karena memakan buah-buahan.", gambar:"https://images.openai.com/static-rsc-4/FoH0XCxelLnNFa2som1c_Cua2rexK3im2ejCy-HlcSS4LmD-rTZZ5YGoxNQOFf6I-ThfL3B-C4-SgFntRnv4rzptRftBc4MgIZznCwrgXsxEuiowMsqJyw39CubBfj-DBdMwgQWl37Qlcm3hM4a8EHjAzCEv3Nq_Am8VAuaWnTE?purpose=inline", sumber:"https://rri.co.id/sorong/berita-lain/2310634/faq.html"},
  {ciri:"Berbulu putih, berjambul kuning, dan memiliki paruh kuat berwarna gelap.", fakta:"Kakatua jambul kuning cerdas, dapat mempelajari suara, dan memecahkan masalah sederhana.", gambar:"https://images.openai.com/static-rsc-4/JSLCiki-kHyvZYkPdZvGCQcW3e3czdHqsbfsUnmukuFD4dLL-6i9OB_iKUjLl-fIE2La-U9sOyDzvHzMrGf3k-3R4_WafSQ-GuIVrq6fb4_zUbrolQvjjI9t5TQWRA07IOc9610x3R2Gtir5Sj32qFBG0O9AB6xZHvl-LDeyVdI?purpose=inline", sumber:"https://planetbirds.blogspot.com/2010/11/yellow-crested-cockatoo.html"}
];

// 6 pasang warna: [latar, teks]
const warna = [["#CDEFD8","#1E7A4A"],["#FFE0B8","#C2531B"],["#D4E7FF","#2A5DB0"],
               ["#FFD3DC","#B5294F"],["#E8DBFF","#6B3FB5"],["#D9F2B8","#4E7F12"]];

function render(data, el, label, extra){
  document.getElementById(el).innerHTML = data.map((s, i) => {
    const [nama, latin, habitat, info, fakta] = s.split("|");
    const [bg, fg] = warna[i % 6];
    const detail = extra ? extra[i] : null;
    return `
    <article class="card" tabindex="0" aria-label="Buka informasi ${nama}" aria-haspopup="dialog">
      <div class="pic${detail ? " has-photo" : ""}" style="background:${bg}">
        ${detail ? `<img src="${detail.gambar}" alt="Foto ${nama}" loading="lazy">` : `<span class="dot"><b style="background:${fg}"></b></span>`}
        <span class="no">${i + 1}</span>
      </div>
      <div class="body">
        <h3>${nama}</h3>
        <em>${latin}</em>
        <div class="row"><b style="color:${fg}">Habitat</b><span>${habitat}</span></div>
        ${!detail || label === "Makanan" ? `<div class="row"><b style="color:${fg}">${label}</b><span>${info}</span></div>` : ""}
        ${detail ? `<div class="row"><b style="color:${fg}">Ciri khas</b><span>${detail.ciri}</span></div>` : ""}
        <div class="fun"><b>${detail ? "Fakta unik:" : "Seru:"}</b> ${detail ? detail.fakta : fakta}</div>
        ${detail && detail.sumber ? `<a class="photo-credit" href="${detail.sumber}" target="_blank" rel="noopener noreferrer">Sumber foto</a>` : ""}
      </div>
    </article>`;
  }).join("");
}

render(hewan, "gridHewan", "Makanan", detailHewan);
render(tumbuhan, "gridTumbuhan", "Ciri", detailTumbuhan);

const searchInput = document.getElementById("speciesSearch");
const searchStatus = document.getElementById("searchStatus");

function normalizeSearch(value){
  return value.toLocaleLowerCase("id-ID").normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

searchInput.addEventListener("input", () => {
  const query = normalizeSearch(searchInput.value);
  let totalMatches = 0;
  let totalSpecies = 0;

  [
    {grid:document.getElementById("gridHewan"), empty:document.getElementById("emptyHewan")},
    {grid:document.getElementById("gridTumbuhan"), empty:document.getElementById("emptyTumbuhan")}
  ].forEach(({grid, empty}) => {
    let matches = 0;
    const cards = grid.querySelectorAll(".card");
    totalSpecies += cards.length;
    cards.forEach(card => {
      const name = card.querySelector("h3").textContent;
      const latin = card.querySelector("em").textContent;
      const matchesQuery = !query || normalizeSearch(`${name} ${latin}`).includes(query);
      card.hidden = !matchesQuery;
      if(matchesQuery) matches++;
    });
    totalMatches += matches;
    empty.hidden = !query || matches > 0;
  });

  searchStatus.textContent = query
    ? totalMatches
      ? `Ditemukan ${totalMatches} hasil untuk "${searchInput.value.trim()}".`
      : `Tidak ada hewan atau tumbuhan bernama "${searchInput.value.trim()}".`
    : `Menampilkan semua ${totalSpecies} hewan dan tumbuhan.`;
});

const detailDialog = document.getElementById("detailDialog");
const dialogContent = document.getElementById("dialogContent");
const dialogClose = detailDialog.querySelector(".dialog-close");
let previousScrollX = 0;
let previousScrollY = 0;

function openDetail(card){
  previousScrollX = window.scrollX;
  previousScrollY = window.scrollY;
  const picture = card.querySelector(".pic").cloneNode(true);
  const body = card.querySelector(".body").cloneNode(true);
  body.querySelector("h3").id = "dialogTitle";
  dialogContent.replaceChildren(picture, body);
  detailDialog.showModal();
  dialogClose.focus();
}

document.querySelectorAll("#gridHewan, #gridTumbuhan").forEach(grid => {
  grid.addEventListener("click", event => {
    if(event.target.closest("a")) return;
    const card = event.target.closest(".card");
    if(card && grid.contains(card)) openDetail(card);
  });

  grid.addEventListener("keydown", event => {
    if(event.key !== "Enter" && event.key !== " ") return;
    const card = event.target.closest(".card");
    if(!card || !grid.contains(card) || event.target.closest("a")) return;
    event.preventDefault();
    openDetail(card);
  });
});

dialogClose.addEventListener("click", () => detailDialog.close());
detailDialog.addEventListener("close", () => {
  window.scrollTo({left:previousScrollX, top:previousScrollY, behavior:"instant"});
});
detailDialog.addEventListener("keydown", event => {
  if(event.key === "Escape"){
    event.preventDefault();
    detailDialog.close();
  }
});
detailDialog.addEventListener("click", event => {
  if(event.target === detailDialog) detailDialog.close();
});