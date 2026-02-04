import React from "react";
import { Box, Text, Stack, HStack, Tag, IconButton } from '@chakra-ui/react'
import { EditIcon, DeleteIcon } from '@chakra-ui/icons'

export default function ExpenseCard({ expense, onDelete, onEdit }) {
  return (
    <Box bg="white" p={4} rounded="md" boxShadow="sm" _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }} transition="all 0.2s">
      <Stack spacing={2}>
        <HStack justify="space-between">
          <Text fontWeight="semibold">{expense.title}</Text>
          <Tag colorScheme="teal">${expense.amount}</Tag>
        </HStack>

        <Text color="gray.500" fontSize="sm">{expense.date ? new Date(expense.date).toLocaleDateString() : '-'}</Text>
        <Text>{expense.category}</Text>

        <HStack spacing={3} mt={2}>
          <IconButton size="sm" aria-label="Edit" icon={<EditIcon />} onClick={onEdit} />
          <IconButton size="sm" aria-label="Delete" icon={<DeleteIcon />} colorScheme="red" onClick={onDelete} />
        </HStack>
      </Stack>
    </Box>
  );
}
