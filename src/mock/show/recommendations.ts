import { Recommendations, ShowDetails } from '../../';

const mockRecommendations: Recommendations = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/zrMCOQnzIgGyBtGCdMPom9bOw0r.jpg',
      genre_ids: [],
      id: '62286',
      media_type: 'tv',
      name: 'Fear the Walking Dead',
      origin_country: [],
      original_language: 'en',
      original_name: 'Fear the Walking Dead',
      overview:
        'What did the world look like as it was transforming into the horrifying apocalypse depicted in "The Walking Dead"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.',
      popularity: 369.552,
      poster_path: '/upmd11A2ZaZEG1j6wRGdD4B5cxs.jpg',
      first_air_date: '2015-08-23',
      vote_average: 7.685,
      vote_count: 3821,
    },
    {
      adult: false,
      backdrop_path: '/vNnLAKmoczRlNarxyGrrw0KSOeX.jpg',
      genre_ids: [],
      id: '1412',
      media_type: 'tv',
      name: 'Arrow',
      origin_country: [],
      original_language: 'en',
      original_name: 'Arrow',
      overview:
        'Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.',
      popularity: 178.856,
      poster_path: '/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg',
      first_air_date: '2012-10-10',
      vote_average: 6.697,
      vote_count: 4739,
    },
    {
      adult: false,
      backdrop_path: '/wvdWb5kTQipdMDqCclC6Y3zr4j3.jpg',
      genre_ids: [],
      id: '1402',
      media_type: 'tv',
      name: 'The Walking Dead',
      origin_country: [],
      original_language: 'en',
      original_name: 'The Walking Dead',
      overview:
        "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
      popularity: 1366.249,
      poster_path: '/w21lgYIi9GeUH5dO8l3B9ARZbCB.jpg',
      first_air_date: '2010-10-31',
      vote_average: 8.086,
      vote_count: 11804,
    },
    {
      adult: false,
      backdrop_path: '/80BRASQnT9KT7BkFeEI0EdeRIF3.jpg',
      genre_ids: [],
      id: '1403',
      media_type: 'tv',
      name: "Marvel's Agents of S.H.I.E.L.D.",
      origin_country: [],
      original_language: 'en',
      original_name: "Marvel's Agents of S.H.I.E.L.D.",
      overview:
        'Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics Division) puts together a team of agents to investigate the new, the strange and the unknown around the globe, protecting the ordinary from the extraordinary.',
      popularity: 179.961,
      poster_path: '/gHUCCMy1vvj58tzE3dZqeC9SXus.jpg',
      first_air_date: '2013-09-24',
      vote_average: 7.445,
      vote_count: 2659,
    },
    {
      adult: false,
      backdrop_path: '/nqzBAMnuMI0xuwtdlEcxcQafyXY.jpg',
      genre_ids: [],
      id: '4607',
      media_type: 'tv',
      name: 'Lost',
      origin_country: [],
      original_language: 'en',
      original_name: 'Lost',
      overview:
        'Stripped of everything, the survivors of a horrific plane crash  must work together to stay alive. But the island holds many secrets.',
      popularity: 141.796,
      poster_path: '/og6S0aTZU6YUJAbqxeKjCa3kY1E.jpg',
      first_air_date: '2004-09-22',
      vote_average: 7.918,
      vote_count: 2496,
    },
    {
      adult: false,
      backdrop_path: '/suopoADq0k8YZr4dQXcU6pToj6s.jpg',
      genre_ids: [],
      id: '1399',
      media_type: 'tv',
      name: 'Game of Thrones',
      origin_country: [],
      original_language: 'en',
      original_name: 'Game of Thrones',
      overview:
        "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
      popularity: 581.832,
      poster_path: '/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg',
      first_air_date: '2011-04-17',
      vote_average: 8.391,
      vote_count: 15958,
    },
    {
      adult: false,
      backdrop_path: '/aq2yEMgRQBPfRkrO0Repo2qhUAT.jpg',
      genre_ids: [],
      id: '44217',
      media_type: 'tv',
      name: 'Vikings',
      origin_country: [],
      original_language: 'en',
      original_name: 'Vikings',
      overview:
        "The adventures of Ragnar Lothbrok, the greatest hero of his age. The series tells the sagas of Ragnar's band of Viking brothers and his family, as he rises to become King of the Viking tribes. As well as being a fearless warrior, Ragnar embodies the Norse traditions of devotion to the gods. Legend has it that he was a direct descendant of Odin, the god of war and warriors.",
      popularity: 368.796,
      poster_path: '/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg',
      first_air_date: '2013-03-03',
      vote_average: 8.051,
      vote_count: 4878,
    },
    {
      adult: false,
      backdrop_path: '/eyG9srihv68ScRdEbJZj66WT4O0.jpg',
      genre_ids: [],
      id: '60735',
      media_type: 'tv',
      name: 'The Flash',
      origin_country: [],
      original_language: 'en',
      original_name: 'The Flash',
      overview: `After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only "meta-human" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.`,
      popularity: 747.498,
      poster_path: '/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg',
      first_air_date: '2014-10-07',
      vote_average: 7.773,
      vote_count: 8533,
    },
    {
      adult: false,
      backdrop_path: '/gDmGiZ9iCxUPrdZ7dyNwSPJtFmf.jpg',
      genre_ids: [],
      id: '39272',
      media_type: 'tv',
      name: 'Once Upon a Time',
      origin_country: [],
      original_language: 'en',
      original_name: 'Once Upon a Time',
      overview:
        "There is a town in Maine where every story book character you've ever known is trapped between two worlds, victims of a powerful curse. Only one knows the truth and only one can break the spell.\n" +
        '\n' +
        "Emma Swan is a 28-year-old bail bonds collector who has been supporting herself since she was abandoned as a baby. Things change for her when her son Henry, whom she abandoned years ago, finds her and asks for her help explaining that she is from a different world where she is Snow White's missing daughter.",
      popularity: 120.588,
      poster_path: '/49qD372jeHUTmdNMGJkjCFZdv9y.jpg',
      first_air_date: '2011-10-23',
      vote_average: 7.164,
      vote_count: 1512,
    },
    {
      adult: false,
      backdrop_path: '/A9lC7Mn3D6alhO4rkuatdW8oCWy.jpg',
      genre_ids: [],
      id: '60708',
      media_type: 'tv',
      name: 'Gotham',
      origin_country: [],
      original_language: 'en',
      original_name: 'Gotham',
      overview:
        "Everyone knows the name Commissioner Gordon. He is one of the crime world's greatest foes, a man whose reputation is synonymous with law and order. But what is known of Gordon's story and his rise from rookie detective to Police Commissioner? What did it take to navigate the multiple layers of corruption that secretly ruled Gotham City, the spawning ground of the world's most iconic villains? And what circumstances created them – the larger-than-life personas who would become Catwoman, The Penguin, The Riddler, Two-Face and The Joker?",
      popularity: 112.499,
      poster_path: '/4XddcRDtnNjYmLRMYpbrhFxsbuq.jpg',
      first_air_date: '2014-09-22',
      vote_average: 7.565,
      vote_count: 2486,
    },
    {
      adult: false,
      backdrop_path: '/gZzIQxo2ukFSdZGtlttA0wI6kax.jpg',
      genre_ids: [],
      id: '34524',
      media_type: 'tv',
      name: 'Teen Wolf',
      origin_country: [],
      original_language: 'en',
      original_name: 'Teen Wolf',
      overview:
        "Scott McCall, a high school student living in the town of Beacon Hills has his life drastically changed when he's bitten by a werewolf, becoming one himself. He must henceforth learn to balance his problematic new identity with his day-to-day teenage life. The following characters are instrumental to his struggle: Stiles, his best friend; Allison, his love interest who comes from a family of werewolf hunters; and Derek, a mysterious werewolf with a dark past. Throughout the series, he strives to keep his loved ones safe while maintaining normal relationships with them.",
      popularity: 263.49,
      poster_path: '/vY2vfAskJTiWsQSv6bdbNCQhPLm.jpg',
      first_air_date: '2011-06-05',
      vote_average: 8.594,
      vote_count: 2782,
    },
    {
      adult: false,
      backdrop_path: '/oS3nip9GGsx5A7vWp8A1cazqJlF.jpg',
      genre_ids: [],
      id: '39351',
      media_type: 'tv',
      name: 'Grimm',
      origin_country: [],
      original_language: 'en',
      original_name: 'Grimm',
      overview: `After Portland homicide detective Nick Burkhardt discovers he's descended from an elite line of criminal profilers known as "Grimms," he increasingly finds his responsibilities as a detective at odds with his new responsibilities as a Grimm.`,
      popularity: 197.223,
      poster_path: '/iOptnt1QHi6bIHmOq6adnZTV0bU.jpg',
      first_air_date: '2011-10-28',
      vote_average: 8.206,
      vote_count: 2163,
    },
    {
      adult: false,
      backdrop_path: '/yGNnjoIGOdQy3douq60tULY8teK.jpg',
      genre_ids: [],
      id: '63247',
      media_type: 'tv',
      name: 'Westworld',
      origin_country: [],
      original_language: 'en',
      original_name: 'Westworld',
      overview:
        'A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged.',
      popularity: 103.992,
      poster_path: '/y55oBgf6bVMI7sFNXwJDrSIxPQt.jpg',
      first_air_date: '2016-10-02',
      vote_average: 8.14,
      vote_count: 3782,
    },
    {
      adult: false,
      backdrop_path: '/92OPBZpLc82y8CzOtrQ8P9RDvIN.jpg',
      genre_ids: [],
      id: '2288',
      media_type: 'tv',
      name: 'Prison Break',
      origin_country: [],
      original_language: 'en',
      original_name: 'Prison Break',
      overview:
        'Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside out.',
      popularity: 167.109,
      poster_path: '/5E1BhkCgjLBlqx557Z5yzcN0i88.jpg',
      first_air_date: '2005-08-29',
      vote_average: 8.1,
      vote_count: 3332,
    },
    {
      adult: false,
      backdrop_path: '/8RNoJJn2S8DlA331OyIqTh3zr68.jpg',
      genre_ids: [],
      id: '64122',
      media_type: 'tv',
      name: 'The Shannara Chronicles',
      origin_country: [],
      original_language: 'en',
      original_name: 'The Shannara Chronicles',
      overview:
        'A young Healer armed with an unpredictable magic guides a runaway Elf in her perilous quest to save the peoples of the Four Lands from an age-old Demon scourge.',
      popularity: 27.222,
      poster_path: '/bYq2R7V9r69pWGOqXOnaJtmmtQ8.jpg',
      first_air_date: '2016-01-05',
      vote_average: 7.047,
      vote_count: 651,
    },
    {
      adult: false,
      backdrop_path: '/zXpSJLcczUt6EfbdULZanguzy87.jpg',
      genre_ids: [],
      id: '46952',
      media_type: 'tv',
      name: 'The Blacklist',
      origin_country: [],
      original_language: 'en',
      original_name: 'The Blacklist',
      overview: `Raymond "Red" Reddington, one of the FBI's most wanted fugitives, surrenders in person at FBI Headquarters in Washington, D.C. He claims that he and the FBI have the same interests: bringing down dangerous criminals and terrorists. In the last two decades, he's made a list of criminals and terrorists that matter the most but the FBI cannot find because it does not know they exist. Reddington calls this "The Blacklist". Reddington will co-operate, but insists that he will speak only to Elizabeth Keen, a rookie FBI profiler.`,
      popularity: 264.565,
      poster_path: '/htJzeRcYI2ewMm4PTrg98UMXShe.jpg',
      first_air_date: '2013-09-23',
      vote_average: 7.484,
      vote_count: 2125,
    },
    {
      adult: false,
      backdrop_path: '/11ihDM8QlLI0BIOGPQpgQ5MfH1n.jpg',
      genre_ids: [],
      id: '60948',
      media_type: 'tv',
      name: '12 Monkeys',
      origin_country: [],
      original_language: 'en',
      original_name: '12 Monkeys',
      overview:
        'The provocative story of Cole, a time traveler from a decimated future in a high-stakes race against the clock. Utilizing a dangerous and untested method of time travel, he journeys from 2043 to the present day on a mission to locate and eradicate the source of a deadly plague that will all but annihilate the human race.',
      popularity: 36.524,
      poster_path: '/tPX5Jg29XSx05qNterYGYGKbh3o.jpg',
      first_air_date: '2015-01-16',
      vote_average: 7.371,
      vote_count: 753,
    },
    {
      adult: false,
      backdrop_path: '/wY8JJgXwCbof1cK3eccZW4cM7L4.jpg',
      genre_ids: [],
      id: '63210',
      media_type: 'tv',
      name: 'Shadowhunters',
      origin_country: [],
      original_language: 'en',
      original_name: 'Shadowhunters',
      overview:
        "When Clary Fray's mother has disappeared, Clary joins a band of Shadowhunters; demon killing hunters, and gets caught up in a plan to save the world.",
      popularity: 83.996,
      poster_path: '/66YHvvVduC21xcMXPpBBF0ywyVZ.jpg',
      first_air_date: '2016-01-12',
      vote_average: 7.515,
      vote_count: 678,
    },
    {
      adult: false,
      backdrop_path: '/pYErfWWb52zq9QQFoZ0Qeoo5Yz.jpg',
      genre_ids: [],
      id: '61345',
      media_type: 'tv',
      name: 'Z Nation',
      origin_country: [],
      original_language: 'en',
      original_name: 'Z Nation',
      overview:
        'Three years after the zombie virus has gutted the country, a team of everyday heroes must transport the only known survivor of the plague from New York to California, where the last functioning viral lab waits for his blood.',
      popularity: 80.654,
      poster_path: '/gXfeDMkEcHoYBvtkbU11g3F81b.jpg',
      first_air_date: '2014-09-12',
      vote_average: 7.145,
      vote_count: 581,
    },
    {
      adult: false,
      backdrop_path: '/z8Mg3YVZGd1iSnoDinEAoh9WTck.jpg',
      genre_ids: [],
      id: '1424',
      media_type: 'tv',
      name: 'Orange Is the New Black',
      origin_country: [],
      original_language: 'en',
      original_name: 'Orange Is the New Black',
      overview:
        "A crime she committed in her youthful past sends Piper Chapman to a women's prison, where she trades her comfortable New York life for one of unexpected camaraderie and conflict in an eccentric group of fellow inmates.",
      popularity: 85.923,
      poster_path: '/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg',
      first_air_date: '2013-07-11',
      vote_average: 7.701,
      vote_count: 1713,
    },
    {
      adult: false,
      backdrop_path: '/j4qTJxqRhpnV6dMcXss1Vnqn9fO.jpg',
      genre_ids: [],
      id: '1411',
      media_type: 'tv',
      name: 'Person of Interest',
      origin_country: [],
      original_language: 'en',
      original_name: 'Person of Interest',
      overview: `John Reese, former CIA paramilitary operative, is presumed dead and teams up with reclusive billionaire Finch to prevent violent crimes in New York City by initiating their own type of justice. With the special training that Reese has had in Covert Operations and Finch's genius software inventing mind, the two are a perfect match for the job that they have to complete. With the help of surveillance equipment, they work "outside the law" and get the right criminal behind bars. `,
      popularity: 43.555,
      poster_path: '/nzWdHTq53KMQFphullKFaVi6252.jpg',
      first_air_date: '2011-09-22',
      vote_average: 8.025,
      vote_count: 1061,
    },
  ],
  total_pages: 2,
  total_results: 40,
};

export default mockRecommendations;
