const express = require('express');
const router = express.Router();

router.get('/users',(req, res) => {
	const userData = [
		{
			"id": 1,
			"date": "10 November 2022",
			"author": "United Nations",
			"headline": "Plastic pollution on course to double by 2030",
			"body":
				[
					"The report highlights dire consequences for health, the economy, biodiversity and the climate. It also says a drastic reduction in unnecessary, avoidable and problematic plastic, is crucial to addressing the global pollution crisis overall. ", 
					"To help reduce plastic waste at the needed scale, it proposes an accelerated transition from fossil fuels to renewable energies, the removal of subsidies and a shift towards more circular approaches towards reduction. ", 
					"Titled From Pollution to Solution: a global assessment of marine litter and plastic pollution, the report shows that there is a growing threat, across all ecosystems, from source to sea. "
				],
			"img": "/news-images/plastic_poll_thumb.jpg",
			"alt": "Plastic underwater"
		},
		{
			"id": 2,
			"date": "11 November 2022",
			"author": "BBC",
			"headline": "Warning against seal disturbance as Cornish Seal Sanctuary celebrates first release of new season",
			"body": 
				[
					"A grey seal pup found injured and starving to death on a Cornish beach has been successfully released back into the wild, after receiving expert care at the Cornish Seal Sanctuary. The pup, named ‘Curry’, was the first to leave the Sanctuary this season after being rescued from a west Cornwall beach last month.", 
					"Volunteers from British Divers Marine Life Rescue (BDMLR) were initially called to assess him on 10th September, and it was quickly decided he would need to be transferred into the care of the Cornish Seal Sanctuary.", 
					"However, on arrival, he was found with a heart drawn around him in the sand, demonstrating how close members of the public had come to the pup. As a result, the Sanctuary is now reminding people to keep their distance if they spot a pup on the beach. Tamara Cooper, Curator for the Cornish Seal Sanctuary, says, “Getting too close to a pup on the beach can result in abandonment by the mother, who may be watching from the water, and can be fatal to the pup.",
					"Pups also need time to rest and conserve energy,  so getting too close can result in them being frightened back into the water, which can cause them to waste precious energy and be injured – particularly if they are startled off rocks.",
					"“That’s why it’s incredibly important that, if a pup or seal is spotted, dogs are immediately put on a lead and everyone stays as far away as possible. While we don’t believe this was the case for Curry, we do ask that, even if a pup looks like it needs help, people continue to give them space. Following his initial vet visit and move the Sanctuary, Curry was found to be malnourished and dehydrated, with a high temperature. He also had ulcers in his mouth, an injury to his right flank and a large swelling on one of his joints. At just three-weeks-old, he needed all the help he could get. However, with the support of the Sanctuary’s animal care team and their vets, Head & Head in Helston, Curry made a speedy recovery, leaving the charity at a healthy weight of 34.5kg on 25th October to start his second chance at life. Tamara says: “We are so pleased to see our first successful release of the new season, and, as with every release, it’s always a proud moment for our team. Caring for these incredible animals is our core mission, alongside supporting our year-round residents. It will no doubt be a busy season ahead, so any help we can get to buy pup supplies will be much appreciated.”"	
				],
			"img": "https://source.unsplash.com/KEf1So-SYMg",
			"alt": "Grey seal"
		}
	];
	res.send(userData);
})

module.exports = router;