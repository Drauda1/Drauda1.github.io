const fieldDependencies = {
	adPlatform: {
		linkedin: {
			label: "LinkedIn",
			value: "linkedin",
			campaignType: {
				sponsoredContent: {
					label: "SponsoredContent",
					value: "sponsoredContent",
					adType: {
						singleImage: {
							label: "SingleImage",
							value: "singleImage",
							placements: {
								feed: { label: "Feed", value: "feed" },
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						event: {
							label: "Event",
							value: "event",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						document: {
							label: "Document",
							value: "document",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						thoughtLeader: {
							label: "ThoughtLeader",
							value: "thoughtLeader",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						message: {
							label: "Message",
							value: "message",
							placements: {
								feed: { label: "Feed", value: "feed" }
							}
						},
						connectedTV: {
							label: "ConnectedTV",
							value: "connectedTV",
							placements: {
								tvStreamingContent: {
									label: "TV Streaming Content",
									value: "tvStreamingContent"
								}
							}
						}
					}
				},
				sponsoredMessaging: {
					label: "SponsoredMessaging",
					value: "sponsoredMessaging",
					adType: {
						conversation: {
							label: "Conversation",
							value: "conversation",
							placements: {
								messages: { label: "Messages", value: "messages" }
							}
						},
						message: {
							label: "Message",
							value: "message",
							placements: {
								messages: { label: "Messages", value: "messages" }
							}
						}
					}
				},
				leadGen: {
					label: "LeadGen",
					value: "leadGen",
					adType: {
						leadGen: {
							label: "LeadGen",
							value: "leadGen",
							placements: {
								feed: { label: "Feed", value: "feed" },
								messages: { label: "Messages", value: "messages" }
							}
						}
					}
				},
				textDynamic: {
					label: "TextDynamic",
					value: "textDynamic",
					adType: {
						text: {
							label: "Text",
							value: "text",
							placements: {
								rightRail: { label: "Right Rail", value: "rightRail" }
							}
						},
						spotlight: {
							label: "Spotlight",
							value: "spotlight",
							placements: {
								rightRail: { label: "Right Rail", value: "rightRail" }
							}
						},
						followers: {
							label: "Followers",
							value: "followers",
							placements: {
								rightRail: { label: "Right Rail", value: "rightRail" }
							},
						},
					},
				},
			},
		},
		google: {
			label: "Google Ads",
			value: "gads",
			campaignType: {
				search: {
					label: "Search",
					value: "search",
					adType: {
						responsive: {
							label: "Responsive",
							value: "responsive",
							placements: {
								googleOnly: { label: "Google Only", value: "googleOnly" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						dynamic: {
							label: "Dynamic",
							value: "dynamic",
							placements: {
								googleOnly: { label: "Google Only", value: "googleOnly" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						callOnly: {
							label: "Call Only",
							value: "callOnly",
							placements: {
								googleOnly: { label: "Google Only", value: "googleOnly" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				disp: {
					label: "Display",
					value: "disp",
					adType: {
						static: {
							label: "Static",
							value: "static",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
							},
						},
						responsive: {
							label: "Responsive",
							value: "responsive",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
							},
						},
						dynamic: {
							label: "Dynamic",
							value: "dynamic",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
							},
						},
						html5: {
							label: "HTML5",
							value: "html5",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
							},
						},
					},
				},
				shopping: {
					label: "Shopping",
					value: "shopping",
					adType: {
						productShopping: {
							label: "Product Shopping",
							value: "productShopping",
							placements: {
								withPartners: { label: "Multiplacement with Search Partners", value: "withPartners" },
								withoutPartners: { label: "Multiplacement without Search Partners", value: "withoutPartners" },
							},
						},
						localInventory: {
							label: "Local Inventory",
							value: "localInventory",
							placements: {
								maps: { label: "Maps", value: "maps" },
							},
						},
					},
				},
				app: {
					label: "App",
					value: "app",
					adType: {
						app: {
							label: "App",
							value: "app",
							placements: {
								discoveryNetwork: { label: "Discovery Network", value: "discoveryNetwork" },
							},
						},
					},
				},
				demandGen: {
					label: "Demand Gen",
					value: "demandGen",
					adType: {
						singleImage: {
							label: "Single Image",
							value: "singleImage",
							placements: {
								discoveryNetwork: { label: "Discovery Network", value: "discoveryNetwork" },
							},
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								discoveryNetwork: { label: "Discovery Network", value: "discoveryNetwork" },
							},
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								discoveryNetwork: { label: "Discovery Network", value: "discoveryNetwork" },
							},
						},
						productShopping: {
							label: "Product Shopping",
							value: "productShopping",
							placements: {
								discoveryNetwork: { label: "Discovery Network", value: "discoveryNetwork" },
							},
						},
					},
				},
				video: {
					label: "Video",
					value: "video",
					adType: {
						inStream: {
							label: "In-Stream",
							value: "inStream",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
								performanceMax: { label: "Performance Max", value: "performanceMax" },
							},
						},
						bumper: {
							label: "Bumper",
							value: "bumper",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
								performanceMax: { label: "Performance Max", value: "performanceMax" },
							},
						},
						inFeed: {
							label: "In-Feed",
							value: "inFeed",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
								performanceMax: { label: "Performance Max", value: "performanceMax" },
							},
						},
						outstream: {
							label: "Outstream",
							value: "outstream",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Videos", value: "youtubeVideos" },
								youtubeChannels: { label: "YouTube Channels", value: "youtubeChannels" },
								apps: { label: "Apps", value: "apps" },
								appCategories: { label: "App Categories", value: "appCategories" },
								performanceMax: { label: "Performance Max", value: "performanceMax" },
							},
						},
						masthead: {
							label: "Masthead",
							value: "masthead",
							placements: {
								websites: { label: "Websites", value: "websites" },
								youtubeVideos: { label: "YouTube Main", value: "youtubeMain" },

							},
						},
					},
				},
				pmax: {
					label: "Pmax",
					value: "pmax",
					adType: {
						pmax: {
							label: "Pmax",
							value: "pmax",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
							},
						},
					},
				},
			},
		},
		meta: {
			label: "Meta",
			value: "meta",
			campaignType: {
				awareness: {
					label: "Awareness",
					value: "awareness",
					adType: {
						image: {
							label: "Image",
							value: "image",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" }
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" }
							}
						},
						collection: {
							label: "Collection",
							value: "collection",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" }
							}
						}
					}
				},
				traffic: {
					label: "Traffic",
					value: "traffic",
					adType: {
						image: {
							label: "Image",
							value: "image",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						collection: {
							label: "Collection",
							value: "collection",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						}
					}
				},
				engagement: {
					label: "Engagement",
					value: "engagement",
					adType: {
						image: {
							label: "Image",
							value: "image",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						collection: {
							label: "Collection",
							value: "collection",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						}
					}
				},
				sales: {
					label: "Sales",
					value: "sales",
					adType: {
						image: {
							label: "Image",
							value: "image",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						collection: {
							label: "Collection",
							value: "collection",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						}
					}
				},
				leads: {
					label: "Leads",
					value: "leads",
					adType: {
						image: {
							label: "Image",
							value: "image",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						carousel: {
							label: "Carousel",
							value: "carousel",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								search: { label: "Search", value: "search" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							}
						},
						collection: {
							label: "Collection",
							value: "collection",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								feeds: { label: "Feeds", value: "feeds" },
								storiesAndReels: { label: "Stories and Reels", value: "storiesAndReels" },
								instream: { label: "InStream", value: "instream" },
								appsAndSites: { label: "Apps and sites", value: "appsAndSites" }
							},
						},
					},
				},
			},
		},
		bing: {
			label: "Bing",
			value: "bing",
			campaignType: {
				app: {
					label: "App",
					value: "app",
					adType: {
						search: {
							label: "Search",
							value: "search",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						native: {
							label: "Native",
							value: "native",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						display: {
							label: "Display",
							value: "display",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				dynamic: {
					label: "Dynamic",
					value: "dynamic",
					adType: {
						search: {
							label: "Search",
							value: "search",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				responsive: {
					label: "Responsive",
					value: "responsive",
					adType: {
						search: {
							label: "Search",
							value: "search",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				smart: {
					label: "Smart",
					value: "smart",
					adType: {
						smart: {
							label: "Smart",
							value: "smart",
							placements: {
								bingSmartSearch: { label: "Bing Smart Search", value: "bingSmartSearch" },
							},
						},
					},
				},
				audience: {
					label: "Audience",
					value: "audience",
					adType: {
						native: {
							label: "Native",
							value: "native",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						display: {
							label: "Display",
							value: "display",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
						video: {
							label: "Video",
							value: "video",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				multimedia: {
					label: "Multimedia",
					value: "multimedia",
					adType: {
						multimedia: {
							label: "Multimedia",
							value: "multimedia",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				product: {
					label: "Product",
					value: "product",
					adType: {
						product: {
							label: "Product",
							value: "product",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								suggestedSearch: { label: "Suggested Search", value: "suggestedSearch" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
				vertical: {
					label: "Vertical",
					value: "vertical",
					adType: {
						search: {
							label: "Search",
							value: "search",
							placements: {
								multiplacement: { label: "Multiplacement", value: "multiplacement" },
								syndicationNetwork: { label: "Syndication Network", value: "syndicationNetwork" },
								audienceNetwork: { label: "Audience Network", value: "audienceNetwork" },
								advertisingNetwork: { label: "Advertising Network", value: "advertisingNetwork" },
								searchNetwork: { label: "Search Network", value: "searchNetwork" },
							},
						},
					},
				},
			},
		},	
	},
};


export default fieldDependencies;
