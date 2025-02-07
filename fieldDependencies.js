const fieldDependencies = {
	adPlatform: {
		LinkedIn: {
			label: "LinkedIn",
			value: "linkedin",
			campaignType: {
				SponsoredContent: {
					label: "SponsoredContent",
					value: "spco",
					adType: {
						SingleImage: {
							label: "SingleImage",
							value: "siim",
							placements: {
								Feed: { label: "Feed", value: "fdfe" },
							}
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Event: {
							label: "Event",
							value: "etev",
							placements: {
								feed: { label: "Feed", value: "fdfe" }
							}
						},
						Document: {
							label: "Document",
							value: "dtdo",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						ThoughtLeader: {
							label: "ThoughtLeader",
							value: "trth",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Message: {
							label: "Message",
							value: "meme",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						ConnectedTV: {
							label: "ConnectedTV",
							value: "cotv",
							placements: {
								TVStreamingContent: {
									label: "TVStreamingContent",
									value: "tttv"
								}
							}
						}
					}
				},
				SponsoredMessaging: {
					label: "SponsoredMessaging",
					value: "spme",
					adType: {
						Conversation: {
							label: "Conversation",
							value: "cnco",
							placements: {
								Messages: { label: "Messages", value: "msme" }
							}
						},
						Message: {
							label: "Message",
							value: "meme",
							placements: {
								Messages: { label: "Messages", value: "msme" }
							}
						}
					}
				},
				LeadGen: {
					label: "LeadGen",
					value: "lege",
					adType: {
						LeadGen: {
							label: "LeadGen",
							value: "lege",
							placements: {
								Feed: { label: "Feed", value: "fdfe" },
								Messages: { label: "Messages", value: "msme" }
							}
						}
					}
				},
				TextDynamic: {
					label: "TextDynamic",
					value: "tedy",
					adType: {
						Text: {
							label: "Text",
							value: "ttte",
							placements: {
								RightRail: { label: "RightRail", value: "rira" }
							}
						},
						Spotlight: {
							label: "Spotlight",
							value: "stsp",
							placements: {
								RightRail: { label: "RightRail", value: "rira" }
							}
						},
						Followers: {
							label: "Followers",
							value: "fsfo",
							placements: {
								RightRail: { label: "RightRail", value: "rira" }
							},
						},
					},
				},
			},
		},
		Google: {
			label: "Google",
			value: "google",
			campaignType: {
				Search: {
					label: "Search",
					value: "shse",
					adType: {
						Responsive: {
							label: "Responsive",
							value: "rere",
							placements: {
								GoogleOnly: { label: "GoogleOnly", value: "gygo" },
								SearchNetwork: { label: "SearchNetwork", value: "sene" },
							},
						},
						Dynamic: {
							label: "Dynamic",
							value: "dcdy",
							placements: {
								GoogleOnly: { label: "GoogleOnly", value: "gygo" },
								SearchNetwork: { label: "SearchNetwork", value: "sene" },
							},
						},
						CallOnly: {
							label: "CallOnly",
							value: "caon",
							placements: {
								GoogleOnly: { label: "GoogleOnly", value: "gygo" },
								SearchNetwork: { label: "SearchNetwork", value: "sene" },
							},
						},
					},
				},
				Display: {
					label: "Display",
					value: "dydi",
					adType: {
						Static: {
							label: "Static",
							value: "scst",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
							},
						},
						Responsive: {
							label: "Responsive",
							value: "rere",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
							},
						},
						Dynamic: {
							label: "Dynamic",
							value: "dcdy",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
							},
						},
						HTML5: {
							label: "HTML5",
							value: "h5ht",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
							},
						},
					},
				},
				Shopping: {
					label: "Shopping",
					value: "sgsh",
					adType: {
						ProductShopping: {
							label: "ProductShopping",
							value: "pgpr",
							placements: {
								SearchPartners: { label: "SearchPartners", value: "sepa" },
								NoSearchPartners: { label: "NoSearchPartners", value: "nose" },
							},
						},
						LocalInventory: {
							label: "LocalInventory",
							value: "lylo",
							placements: {
								Maps: { label: "Maps", value: "msma" },
							},
						},
					},
				},
				app: {
					label: "App",
					value: "apap",
					adType: {
						App: {
							label: "App",
							value: "apap",
							placements: {
								DiscoveryNetwork: { label: "DiscoveryNetwork", value: "dine" },
							},
						},
					},
				},
				DemandGen: {
					label: "DemandGen",
					value: "dnde",
					adType: {
						SingleImage: {
							label: "SingleImage",
							value: "siim",
							placements: {
								DiscoveryNetwork: { label: "DiscoveryNetwork", value: "dkdi" },
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								DiscoveryNetwork: { label: "DiscoveryNetwork", value: "dkdi" },
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								DiscoveryNetwork: { label: "DiscoveryNetwork", value: "dkdi" },
							},
						},
						ProductShopping: {
							label: "ProductShopping",
							value: "prso",
							placements: {
								DiscoveryNetwork: { label: "DiscoveryNetwork", value: "dkdi" },
							},
						},
					},
				},
				Video: {
					label: "Video",
					value: "vovi",
					adType: {
						InStream: {
							label: "InStream",
							value: "inst",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
								PerformanceMax: { label: "PerformanceMax", value: "pema" },
							},
						},
						bumper: {
							label: "Bumper",
							value: "brbu",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
								PerformanceMax: { label: "PerformanceMax", value: "pema" },
							},
						},
						InFeed: {
							label: "InFeed",
							value: "infe",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
								PerformanceMax: { label: "PerformanceMax", value: "pema" },
							},
						},
						OutStream: {
							label: "OutStream",
							value: "oust",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
								YoutubeChannels: { label: "YouTubeChannels", value: "yoch" },
								Apps: { label: "Apps", value: "asap" },
								AppCategories: { label: "AppCategories", value: "apca" },
								PerformanceMax: { label: "PerformanceMax", value: "pema" },
							},
						},
						Masthead: {
							label: "Masthead",
							value: "mahe",
							placements: {
								Websites: { label: "Websites", value: "wswe" },
								YoutubeVideos: { label: "YouTubeVideos", value: "yovi" },
							},
						},
					},
				},
				Pmax: {
					label: "Pmax",
					value: "pxpm",
					adType: {
						Pmax: {
							label: "Pmax",
							value: "pxpm",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
							},
						},
					},
				},
			},
		},
		Meta: {
			label: "Meta",
			value: "meta",
			campaignType: {
				Awareness: {
					label: "Awareness",
					value: "asaw",
					adType: {
						Image: {
							label: "Image",
							value: "ieim",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" }
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" }
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" }
							},
						},
						Collection: {
							label: "Collection",
							value: "cnco",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
							},
						},
					},
				},
				Traffic: {
					label: "Traffic",
					value: "tctr",
					adType: {
						Image: {
							label: "Image",
							value: "ieim",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Collection: {
							label: "Collection",
							value: "cnco",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
					},
				},
				Engagement: {
					label: "Engagement",
					value: "eten",
					adType: {
						Image: {
							label: "Image",
							value: "ieim",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Collection: {
							label: "Collection",
							value: "cnco",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
					},
				},
				Sales: {
					label: "Sales",
					value: "sssa",
					adType: {
						Image: {
							label: "Image",
							value: "ieim",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Collection: {
							label: "Collection",
							value: "cnco",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
					},
				},
				Leads: {
					label: "Leads",
					value: "lsle",
					adType: {
						Image: {
							label: "Image",
							value: "ieim",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								Search: { label: "Search", value: "shse" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
						Collection: {
							label: "Collection",
							value: "cnco",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								Feeds: { label: "Feeds", value: "fsfe" },
								StoriesAndReels: { label: "StoriesAndReels", value: "stre" },
								InStream: { label: "InStream", value: "inst" },
								AppsAndSites: { label: "AppsAndSites", value: "apsi" }
							},
						},
					},
				},
			},
		},
		Bing: {
			label: "Bing",
			value: "bing",
			campaignType: {
				App: {
					label: "App",
					value: "apap",
					adType: {
						Search: {
							label: "Search",
							value: "shse",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
						Native: {
							label: "Native",
							value: "ntve",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
						Display: {
							label: "Display",
							value: "dydi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Dynamic: {
					label: "Dynamic",
					value: "dcdy",
					adType: {
						Search: {
							label: "Search",
							value: "shse",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Search: {
					label: "Search",
					value: "shse",
					adType: {
						Responsive: {
							label: "Responsive",
							value: "rere",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Smart: {
					label: "Smart",
					value: "smart",
					adType: {
						Smart: {
							label: "Smart",
							value: "smart",
							placements: {
								BingSmartSearch: { label: "BingSmartSearch", value: "bhbi" },
							},
						},
					},
				},
				Audience: {
					label: "Audience",
					value: "aeau",
					adType: {
						Native: {
							label: "Native",
							value: "ntve",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
						Display: {
							label: "Display",
							value: "dydi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Multimedia: {
					label: "Multimedia",
					value: "mulm",
					adType: {
						Multimedia: {
							label: "Multimedia",
							value: "mulm",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Product: {
					label: "Product",
					value: "ptpr",
					adType: {
						Product: {
							label: "Product",
							value: "ptpr",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								SuggestedSearch: { label: "SuggestedSearch", value: "shsu" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
				Vertical: {
					label: "Vertical",
					value: "vlve",
					adType: {
						Search: {
							label: "Search",
							value: "shse",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mtmu" },
								SyndicationNetwork: { label: "SyndicationNetwork", value: "syne" },
								AudienceNetwork: { label: "AudienceNetwork", value: "aune" },
								AdvertisingNetwork: { label: "AdvertisingNetwork", value: "adne" },
								SearchNetwork: { label: "SearchNetwork", value: "skse" },
							},
						},
					},
				},
			},
		},
				Reddit: {
			label: "Reddit",
			value: "redd",
			campaignType: {
				PromotedPost: {
					label: "PromotedPost",
					value: "prpo",
					adType: {
						FreeForm: {
							label: "FreeForm",
							value: "frfm",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Image: {
							label: "Image",
							value: "imge",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Video: {
							label: "Video",
							value: "vovi",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Carousel: {
							label: "Carousel",
							value: "clca",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						},
						Conversation: {
							label: "Conversation",
							value: "cnvo",
							placements: {
								CommentThread: { label: "CommentThread", value: "cthr" }
							}
						},
						ProductAds: {
							label: "ProductAds",
							value: "prad",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mmpa" }
							}
						},
						AmA: {
							label: "AmA",
							value: "ama",
							placements: {
								Feed: { label: "Feed", value: "fdfe" }
							}
						}
					}
				},
				HighImpactOfferings: {
					label: "HighImpactOfferings",
					value: "hiof",
					adType: {
						CategoryTakeover: {
							label: "CategoryTakeover",
							value: "cato",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mmpa" },
								MultiplacementWithFirstView: { label: "MultiplacementWithFirstView", value: "mmfv" }
							}
						},
						RedditTakeover: {
							label: "RedditTakeover",
							value: "rtta",
							placements: {
								Multiplacement: { label: "Multiplacement", value: "mmpa" },
								MultiplacementWithFirstView: { label: "MultiplacementWithFirstView", value: "mmfv" }
							},
						},
					},
				},
			},
		},
	},
};


export default fieldDependencies;
