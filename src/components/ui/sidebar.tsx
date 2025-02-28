import { Box, VStack, Text, IconButton } from "@chakra-ui/react"
import { FaHome, FaBell, FaCog } from "react-icons/fa"
import { ReactNode } from "react"

interface NavItemProps {
  icon: ReactNode
  label: string
}

const NavItem = ({ icon, label }: NavItemProps) => (
  <Box display="flex" alignItems="center" p="3" cursor="pointer" _hover={{ bg: "gray.700" }}>
    <IconButton aria-label={label} icon={icon} variant="ghost" />
    <Text ml="3">{label}</Text>
  </Box>
)

const Sidebar = () => (
  <Box bg="gray.800" color="white" w="250px" h="100vh" p="5">
    <VStack align="start" spacing="4">
      <NavItem icon={<FaHome />} label="Home" />
      <NavItem icon={<FaBell />} label="Alerts" />
      <NavItem icon={<FaCog />} label="Settings" />
      {/* Add more NavItems as needed */}
    </VStack>
  </Box>
)

export default Sidebar